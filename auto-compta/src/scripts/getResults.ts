import * as fs from 'fs';
/* const fs = require('fs'); */ // seult si type : module pas dans Package.json

const fileName: string = 'cpteCo2023_02';
const rawdata: Buffer = fs.readFileSync(`../statements/${fileName}.json`);
const operations = JSON.parse(rawdata.toString());
console.log('typeof operations:', typeof operations);
console.log('instanceof Object:', operations instanceof Object);

const monJson = operations[0]
// const operation = JSON.parse(monJson (key, value))

interface Operation {
    date: string;
    montant: string;
    moyen: string;
    tiers: string;
    date_operation: string;
    numero_cheque: string;
    categorie: string;
}

const depenses = function getDepenses (ops : Array<Operation>) {
    return ops.filter(op => parseInt(op.montant) < 0);
}

const recettes = function getDepenses (operations : Array<Operation>) {
    return operations.filter(operation => parseInt(operation.montant) > 0);
}

const dépenses = depenses(operations);
console.log('dépenses:', dépenses)
