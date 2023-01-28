/*  Server-side rendering  (Node.js?) creates problem to use browser, there is no window etc. so reference error when using 'document' */

/* de quelles fonctions et constantes avons nous besoin?
const operations = un objet comprenant plusieurs objets contenant toutes les infos d'une opération bancaire -> operationsObj
fonction : créer dynamiquement un tableau dont le nombre de colonnes dépent d'un array qu'on lui passe en argument dont les elts sont les headers des colonnes
fonction : créer une ligne de tableau (row) pour chaque operation
fonction : placer chaque info de l'opération dans les cases de la ligne du tableau correspondant
*/

// eslint-disable-next-line react/jsx-indent
import * as fs from 'fs';
/* const fs = require('fs'); */ // seult si type : module pas dans Package.json

const fileName = 'cptaCo_Dec';
const rawdata = fs.readFileSync(`../statements/${fileName}.json`);
const operationsObj = JSON.parse(rawdata);

/* const oneJsonValue = Object.values(jsonInfos[0]);
console.log("jsonValues[0] : ", oneJsonValue); */

/* function extractValues () {
    const valeursExtraites = [];
    operationsObj.forEach(
        objet => {
            const valeurs = Object.values(objet);
            valeursExtraites.push(valeurs);
        });
    return valeursExtraites;
} */

function extractValueWithKey (wantedKey) {
    const data = [];
    operationsObj.forEach(
        objet => {
            Object.entries(objet).forEach(entry => {
                const [key, value] = entry;
                if (key === wantedKey) {
                    data.push(value);
                }
            });
        });
    return data;
}

const montants = extractValueWithKey('montant');
montants.forEach(montant => parseFloat(montant));
console.log('Montants :', montants);
console.log('Montants longueur :', montants.length);
console.log('Montants type:', typeof (montants));

/* const totalMontants = montants.reduce((a, b) => a + b, 0);
console.log(totalMontants); */

function sumArray (array) {
    let sum = 0;

    array.forEach(item => {
        sum += item;
    });

    console.log(sum);
    return sum;
}

const total = numbers.reduce(sum, 0);

function sum (accumulator, value, index, arr) {
    return accumulator + value;
}

/*   const total = sumArray(montants);
  console.log(total) */

const array1 = [1, 2, 3, 4];
const array2 = [3, -1, 0];

// 0 + 1 + 2 + 3 + 4

const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sumWithInitial);
// expected output: 10

const reducer = (tot, num) => (tot + num);
const sumOfNegative = numbers => numbers.reduce(reducer, 0);

// console.log(sumOfNegative(array2));
// => 2

let amountsSum = 0;

for (let i = 0; i < montants.length; i++) {
    const unChiffre = parseFloat(montants[i]);
    amountsSum += unChiffre;
}

console.log('amountsSum : ', amountsSum);

const listOfTiers = extractValueWithKey('tiers');
console.log('listOfTiers:', listOfTiers);
console.log('operationsObj:', operationsObj);

/* const dynamicTable = document.getElementById('dynamicTable');
const btn = document.getElementById('dynamicTableButton'); */
const myheaders = ['date', 'montant', 'moyen', 'tiers', 'date de l\'opération', 'numéro de chèque', 'catégorie'];

const functionCreateTable = function createTable (headersArray, operationsObject) {
    console.log('coucou from function createTable');
    /*     const headers = headersArray;
    const filling = operationsObject;
    // créer les headers
    const THead = dynamicTable.createTHead();
    const firstRow = THead.insertRow(0);
    for (let i = 0; i < headers.length; i++) {
        const columnHeader = firstRow.insertcell(i);
        const headerText = document.createTextNode(headers[i]);
        columnHeader.appendChild(headerText);
    };
    console.log(dynamicTable);
    console.log(filling); */
};

functionCreateTable(myheaders, operationsObj[0]);

/* <thead>
<tr>
    <th>date</th>
    <th>montant</th>
    <th>moyen</th>
    <th>tiers</th>
    <th>date de l'opération</th>
    <th>numéro de chèque</th>
    <th>catégorie</th>
</tr>
</thead>
<tbody>
<tr>
    <td>une date </td>
    <td>le montant </td>
    <td>moyen de paiement </td>
    <td>le tiers, In blanditiis deserunt</td>
    <td>une autre date ou rien</td>
    <td>un numéro de chèque ou rien</td>
    <td>la catégorie</td>
</tr> */
