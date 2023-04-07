export const fakeBin = (stringOfDigits:string):string => {
    const result: Array<string> = [];

    const myArray = stringOfDigits.split('').forEach(
        digit => { if (parseInt(digit,10) < 5) { result.push('0') } else { result.push('1') }});
    
    return result.join("")
  };