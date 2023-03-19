"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
/* const fs = require('fs'); */ // seult si type : module pas dans Package.json
const fileName = 'cptaCo_Dec';
const rawdata = fs.readFileSync(`../statements/${fileName}.json`);
const operations = JSON.parse(rawdata.toString());
console.log('typeof operations:', typeof operations);
console.log('instanceof Object:', operations instanceof Object);
const monJson = operations[0];
const depenses = function getDepenses(ops) {
    return ops.filter(op => parseInt(op.montant) < 0);
};
const recettes = function getDepenses(operations) {
    return operations.filter(operation => parseInt(operation.montant) > 0);
};
const dépenses = depenses(operations);
console.log('dépenses:', dépenses);
