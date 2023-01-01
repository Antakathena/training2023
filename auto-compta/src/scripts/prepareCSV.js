import * as fs from 'fs';
/* const fs = require('fs'); */ // work if type is not set to : module in Package.json

// VARIABLES
let myCsvArray;
const notNeeded = [ 'CB', 'PRL', 'VIREMENT' ];       

// FUNCTIONS

/** reading the file using default npm package */
function extract(file) {
    try {
        return fs.readFileSync(file, 'utf-8');
    } catch (err) { console.log(err) }
}

/** chaque ligne du csv devient une string rangée dans un élément du tableau
REGEX : The forward slashes / / mark the beginning and end of the regular expression.
We want to replace both \r and \n characters because the line breaks vary depending on the operating system. */
function extractLines (csvContent) {
    return csvContent.toString().split(/\r?\n/);
}

myCsvArray = extractLines(extract("../cptaNov.csv"));
myCsvArray.pop();

const operations = myCsvArray.map(formatLine);

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

function removePaymentType(tiers) {
    return notNeeded.reduce((accumulator, elementToRemove) => accumulator.replace(elementToRemove, ''), tiers).trim();
}

function removeDate(tiersWithDate) {
    return tiersWithDate.replace(/(\d{1,2})\/(\d{1,2})\/(\d{2})$/, '').trim();
}

function extractDate(tiersWithDate) {
    return /(\d{1,2})\/(\d{1,2})\/(\d{2})$/.exec(tiersWithDate)?.[0];
}

function extractTier(tiersDirty){
    let tiersWithoutPaymentType = removePaymentType(tiersDirty);
    let tiersWithoutDate = removeDate(tiersWithoutPaymentType);
    return tiersWithoutDate
}

console.log(operations)

/* // essai de récup d'un fichier json :
try {
    jsonResult = JSON.stringify(operations)
    fs.writeFileSync('test.json', jsonResult);
    } catch (err) { console.log(err) }
     */









    
// et maintenant on nettoie les strings et on en fait des sous-tableaux avec juste le necessaire :
/* for (let line of myCsvArray){
    let operationLine = line.split(';').filter(element => element.length > 1 && element !== 'Divers'); // éviter d'effacer (chge nbr d'elt)

    // pour les lignes de dépenses, on veut isoler le nom du tiers:
    let tiersDirty = operationLine[3]
        let debut = tiersDirty.slice(0,3);
        for (trio of notNeeded) {
            if (debut === trio) {
            operationLine[3] = tiersDirty.replace('CB  ', '').replace('PRLV ', '').replace('VIREMENT ', '');
            }
        }
        const long = tiersDirty.length
        const fin = tiersDirty.slice(long-8, long);

        // si la fin du 4ème elt contient une date d'opération, on la met dans un élément différent :
        if(fin.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2})$/)) {
            operationLine[3] = operationLine[3].replace(fin, '').trim();
            operationLine.pus
        for (trio of notNeeded) {
            if (debut === trio) {
            operationLine[3] = tiersDirty.replace('CB  ', '').replace('PRLV ', '').replace('VIREMENT ', '');
            }
        }
        const long = tiersDirty.length
        const fin = tiersDirty.slice(long-8, long);

        // si la fin du 4ème elt contient une date d'opération, on la met dans un élément différent :
        if(fin.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2})$/)) {
            operationLine[3] = operationLine[3].replace(fin, '').trim();
            operationLine.push(fin);
        }
    }
    operations.push(operationLine);
}; */



/* // on extrait la dernière ligne : c'est le solde et le numéro du compte, pas une opération
lastLine = operations.slice(-1);
console.log("lastline", lastLine);
operations.pop(); */

/* echantillon = operations.slice(0,3);
// console.log("les premières lignes", echantillon)

for (let operation of echantillon) {
    jsonResults.push(JSON.stringify(zip(headers, operation)));
}

console.log(jsonResults.length)
console.log(jsonResults) */






// Une fois ok : lint et ajouter tests jest.

