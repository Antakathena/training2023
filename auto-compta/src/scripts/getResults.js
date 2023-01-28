/* const fs = require('fs'); */ // seult si type : module pas dans Package.json
import * as fs from 'fs';

const files = ['cptaSo_Dec', 'cptaCo_Dec'];
const fileName = 'cptaCo_Dec';
const rawdata = (f) => { return fs.readFileSync(`../statements/${f}.json`) };
const operations = (dataFile) => { return JSON.parse(dataFile) };
// console.log('instanceof Object:', operations instanceof Object);
const getDepenses = function getDepenses (ops) { return ops.filter(op => parseInt(op.montant) < 0) };
const getRecettes = (ops) => { return ops.filter(op => parseInt(op.montant) > 0) };
/** give it operations list of object and a tiers to look for as a string */
const getOpsByTier = (ops, leTiers) => { return ops.filter(op => op.tiers === leTiers) };
/**
 * function sum
*reduce() takes in an array, execute a callback on each elt and outputs a single value
(+ anonymous function to use object prop)
*/
const sumOfAmounts = (operationsListOfObject) => {
    return operationsListOfObject.reduce(function (acc, obj) { return acc + parseInt(obj.montant) }, 0);
};

const getResults = async function getResults (f) {
    try {
        const data = rawdata(f);
        const mvts = await operations(data);
        const lesDepenses = await getDepenses(mvts);
        const lesRecettes = await getRecettes(mvts);
        const totalDepenses = sumOfAmounts(lesDepenses);
        console.log(f, { totalDepenses });
        const totalRecettes = sumOfAmounts(lesRecettes);
        console.log(f, { totalRecettes });
        const resultatMensuel = totalRecettes + totalDepenses;
        console.log(f, { resultatMensuel });
        // mes virements si compte commun
        if (f.indexOf('Co') > -1) {
            const virSo = sumOfAmounts(getOpsByTier(operations, 'MADEMOISELLE SOPHIE TR'));
            console.log({ virSo });
        };
    } catch (error) {
        console.log(error);
    }
};

files.forEach(file => getResults(file));
