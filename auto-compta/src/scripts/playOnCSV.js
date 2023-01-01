import * as fs from 'fs';
/* const fs = require('fs'); */ //seult si type : module pas dans Package.json

const rawdata = fs.readFileSync('../test.json');
const operationsObj = JSON.parse(rawdata);

/* const oneJsonValue = Object.values(jsonInfos[0]);
console.log("jsonValues[0] : ", oneJsonValue); */

function extractValues(){
    const valeursExtraites = [];
    operationsObj.forEach( 
        objet => {
        let valeurs = Object.values(objet);
        valeursExtraites.push(valeurs)
    });
    return valeursExtraites
}

function extractValueWithKey(wantedKey) {
    let data = [];
    operationsObj.forEach( 
        objet => {
        Object.entries(objet).forEach(entry => {
            const [key, value] = entry;
            if(key === wantedKey){
                data.push(value)   
            }  
        })
    });
    return data
}

const montants = extractValueWithKey("montant")
montants.forEach( montant => parseFloat(montant))
console.log("Montants :", montants)
console.log("Montants longueur :", montants.length)
console.log("Montants type:", typeof(montants))

/* const totalMontants = montants.reduce((a, b) => a + b, 0);
console.log(totalMontants); */

function sumArray(array) {
    let sum = 0;
  
    array.forEach(item => {
      sum += item;
    });
  
    console.log(sum);
    return sum;
  }

/*   const total = sumArray(montants);
  console.log(total) */

  const array1 = [1, 2, 3, 4];
  const array2 = [3, -1, 0];

  // 0 + 1 + 2 + 3 + 4

  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  
  console.log(sumWithInitial);
  // expected output: 10


const reducer = (tot, num) => (tot + num);
const sumOfNegative = numbers => numbers.reduce(reducer, 0);

console.log(sumOfNegative(array2))
// => 2

let amountsSum = 0;

for (let i=0; i < montants.length; i++) {
    let unChiffre = parseFloat(montants[i]);
    amountsSum += unChiffre;
}

console.log("amountsSum : ", amountsSum)

const listOfTiers = extractValueWithKey("tiers")
console.log(listOfTiers)