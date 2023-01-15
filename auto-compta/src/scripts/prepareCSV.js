import * as fs from 'fs';
/* const fs = require('fs'); */ // work if type is not set to : module in Package.json

// VARIABLES
let myCsvArray;
const notNeeded = [ 'CB', 'PRL', 'VIREMENT' ];
const filePath = "../statements/cptaNov.csv";
myCsvArray = extractLines(extract(filePath));
myCsvArray.pop();
const operations = myCsvArray.map(formatLine);

/** function extract(file) : returns the content of the file
 * @param {string} csvContent the path of a file
 * @returns {fileContent} file content encoded in utf-8
 * reading the file using default npm package */
function extract(file) {
    try {
        return fs.readFileSync(file, 'utf-8');
    } catch (err) { console.log(err) }
}

/** function extractLines (csvContent) : returns an array of which every element is a string of an operation line
 * @param {undefined} csvContent a csv file
 * @returns {undefined} but why is it neither typeof string nor instanceof String ?
 * NB about REGEX : / / mark the beginning and end of the regular expression.
 * We want to replace both \r and \n characters because the line breaks vary depending on the operating system.
*/
function extractLines (csvContent) {
    return csvContent.toString().split(/\r?\n/);
}

/** function formatLine(line)
 * Transforms each line of operation in a usefull object,
 * @param {string} line the string of an operation, with infos separated by semi-colon,
 * @returns {Object} detailed infos about an operation
 */
function formatLine(line) {
    let operationLine = line.split(';');
    const dirtyTiers = operationLine[4] != '' ? operationLine[4] : operationLine[5];
    /* return [ operationLine[0],operationLine[1],operationLine[2], extractTier(dirtyTiers), extractDate(dirtyTiers) ] */
    return {
        "date": operationLine[0],
        "montant":operationLine[1],
        "moyen":operationLine[2],
        "tiers": extractTier(dirtyTiers),
        "date_operation":extractDate(dirtyTiers),
        "numero_cheque": operationLine[3],
        "categorie":''
    }
}

/** cleaning csv */
function removePaymentType(tiers) {
    return notNeeded.reduce((accumulator, elementToRemove) => accumulator.replace(elementToRemove, ''), tiers).trim();
}

/** cleaning csv */
function removeDate(tiersWithDate) {
    return tiersWithDate.replace(/(\d{1,2})\/(\d{1,2})\/(\d{2})$/, '').trim();
}

/** get operation date */
function extractDate(tiersWithDate) {
    return /(\d{1,2})\/(\d{1,2})\/(\d{2})$/.exec(tiersWithDate)?.[0];
}

/** clean and get Tier */
function extractTier(tiersDirty){
    let tiersWithoutPaymentType = removePaymentType(tiersDirty);
    let tiersWithoutDate = removeDate(tiersWithoutPaymentType);
    return tiersWithoutDate
}

/** function createJson(ops) : create json containing operations in statements folder
 * @param {Object} ops 
 */
function createJson(ops) {
    try {
        const jsonResult = JSON.stringify(ops)
        fs.writeFileSync('../statements/testPrepareCSV.json', jsonResult);
        console.log("un Json a été créé")
        } catch (err) { console.log(err) }
}

console.log(typeof operations)
//createJson(operations)

      
