
const spread1 = [5, 9, 3, -14];
console.log(spread1);

// const spread2 = [5, 9, 7];
const spread2 = [...spread1, 7, 77, 777];
console.log(spread2);

// const spread3 = [7, 5, 9];
const spread3 = [7, 77, 777, ...spread1];
console.log(spread3);

const spread4 = ['asd', 'qwe', 874, true];
console.log(spread4);

const spread5 = [...spread4, ...spread1];
console.log(spread5);

const spread6 = [...spread1, ...spread4];
console.log(spread6);


console.log('------------');


// rest operatorius
// kai norime surinkti visus likusius parametrus i bendra sarasa
// grazinamas arejus su visais skaiciukais


const average = (...list) => {  
    const sum = list.reduce((total, num) => total + num, 0)
    return sum / list.length;
}

const ave = average(10, 2, 8, 4, 6);
console.log(ave);


console.log('------------');


const apieMane = (name, age, ...list) => {
    return `Sveiki, as esu ${name}, man yra ${age} metai ir as megstu: ${list.join(', ')}.`;
}

const petras = apieMane('Petras', 55, 'pyragus', 'obuolius', 'kriauses 😍👏');
console.log(petras);


console.log('------------');


// primityvios reiksmes


let a = 5;
let b = 999;

b = a;

console.log(a);
console.log(b);

a = 777;

console.log(a);
console.log(b);


console.log('------------');


// kompleksines reiksmes, arejai ir objektai (savyje laiko daug info).
// kompleksiniai kintamieji: gali buti labai dideli.
// kompleksines reiksmes dalijasi mintimi.
// kompleksiniai kintamieji yra darbas su adresais. 
// Primityvus kintamieji yra darbas su reiksmemis.


let cc = [4, 44];
let dd = [8, 88];

console.log(cc);
console.log(dd);

dd = cc;

console.log(cc);
console.log(dd);

cc[0] = 11111;

console.log(cc);  // abu ziuri i ta pacia atminties vieta
console.log(dd);


console.log('------------');


const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

// const sveikieji = desimtainiai.map(n => Math.round(n));

desimtainiai.forEach((n, i) => desimtainiai[i] = Math.round(n));

console.log(desimtainiai);







