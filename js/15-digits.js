function digits(skaicius) {
    // input validation
if (typeof skaicius !== 'number') {
    return 'EROR: turi buti skaiciaus tipas'
}

if (isNaN(skaicius)) {       // if ('' + skaicius === 'NaN') {
    return 'EROR: NaN nera normalus skaicius'
}

if (!isFinite(skaicius)) {      
    return `EROR: ${skaicius} NaN nera normalus skaicius`
}
    // logic
    const ilgis = skaicius;
    
    
    // return result
    return ilgis;
}


console.log(digits(true));
console.log(digits('asd'));
console.log(digits(NaN));
console.log(digits(Infinity));
console.log(digits(-Infinity));
console.log(digits());
console.log(digits(undefined));
console.log(digits(null));
console.log(digits([]));
console.log(digits(''));
console.log(digits([4655]));
console.log(digits(digits));



// console.log(digits(5), '->', 1);
// console.log(digits(781), '->', 3 );
// console.log(digits(37060123456), '->', 11);

