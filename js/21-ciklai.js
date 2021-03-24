
/*

JS galimi ciklai ir 'cikliskos' funkcijos / metodai:

(funkcijos) 
// tai papildomi budai, isreiksiantys for'a
- for
- for-in
- for-of

// neapibrezto kartojimo ciklai
- while
- do-while

(metodai)
- foreach
- map
- filter
- reduce
- sort

*/

const list = [1, -5, 78, 2, 11, -14, 0, -3];


// FOR
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei tokia yra


for (let i = 0; i < list.length; i++) {
    const item = list[i];
    if (item > 0) {
        continue;
    }

    console.log(item);
}


console.log('------------'); // console.clear();


// FOR-IN


for (const i in list) {
    const item = list[i];
    if (item > 0) {
        continue;
    }

    console.log(i, item);
}

console.log('------------');


// FOR-OF
// break: nutraukia ciklo darba
// continue: eiti i sekancia ciklo iteracija, jei tokia yra


for (const item of list) {
    if (item > 0) {
        continue;
    }

    console.log(item);
}

console.log('------------');


// WHILE // tol kol nepasiekei finiso - neik i prieki. TOL - KOL.
// break: nutraukia ciklo darba


let randomNumber = 0;
let randomNumberCount = 0;

while (randomNumber < 0.9) {
    randomNumber = Math.random();           // [0..1)
    randomNumberCount++;
    console.log(randomNumberCount, randomNumber);
}


console.log('------------');


let i = 0;

while (i < list.lenght) {
    const item = list[i];
    if (item < -10) {
        break;
    }

    console.log(item);
    i++;
}


// DO-WHILE 
// Kai norime logika padaryti bent viena karta.
// Pirmiausia daro, o tada klausia ar gali kartoti.
// break: nutraukia ciklo darba.


let dwi = 0;

do {
    console.log(dwi);
    if (dwi > 2) {
        break;
    }
    dwi++;

} while (dwi < 5)


console.log('------------');


// FOREACH
// tai yra ciklas, kuris automatiskai eina per sarasa.
// nuo pirmo iki paskutinio nario.
// jo sustabdyti yra neimanoma - silpnoji vieta.


let suma = 0;

list.forEach(function (item, i) {
    console.log(i, item);
})


console.log('------------');


// kompatiskesnis uzrasymas


let Fesuma = 0;

list.forEach(n => Fesuma += n);

console.log(Fesuma);


console.log('------------');


const doubleList = [[1, 5], 15, [8, 99], -40, [-8, -7, 15, 4], [3]];
let dlSuma = 0; 
// doubleList.forEach(innerItem => innerItem.forEach(n => dlSuma += n));


doubleList.forEach(
    innerItem => typeof innerItem === 'number'
        ? dlSuma += innerItem
        : innerItem.forEach(n => dlSuma += n)
);


// MAP

// skirtas manipuliuoti tik arejui.
// skirtas arejaus reiksmiu modifikavimui.

/* 
map() metodas perejes per duota sarasa grazina tokio pacio dydzio
sarasa, tik su pakeistomis reiksmemis.
*/


const mapList = [1, 2, 3 , 4, 5, 6];
const forListSquare = [];

for (const num of mapList) {
    forListSquare.push(num * num);
}

console.log(forListSquare);


console.log('------------');


const mapListSquare = mapList.map(n => n * n);
console.log(mapListSquare);


console.log('------------');


// uzdavinys: visi neigiami skaiciai turi buti konvertuoti i nuli

const pazymiai = [10, -8, 2, -6, 8, -2];

const konvertuotiPazymiai = pazymiai.map(n => n < 0 ? 0 : n);
console.log(konvertuotiPazymiai);


console.log('------------');


const desimtainiai = [3.14, 5, 6.7, -14.7, -8, 0.001];

const sveikieji = desimtainiai.map(n => Math.round(n));
console.log(desimtainiai)
console.log(sveikieji);


console.log('------------');


// mapo atitikmeni galima parasyti su paprastuoju ciklu.
// bet pavyzdys nera visiskai geras.

for (let i = 0; i < desimtainiai.length; i++) {
    desimtainiai[i] = Math.round(desimtainiai[i]);
}

console.log(desimtainiai);


// FILTER
// atrinkti tik tikrus pazymius, t. y. [1..10]

const marks = [10, -8, 2, 3.14, -6, 7.5, 8, -2, 11, 55];

const filteredMarks = marks.filter(m => m >= 1 && m <= 10 && m % 1 === 0);

console.log(marks);
console.log(filteredMarks);


console.log('------------');


// palikti zodzius is didziosios raides


const dictionary = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const isDidziosios = dictionary.filter(word => word[0] === word[0].toUpperCase());

console.log(dictionary);
console.log(isDidziosios);


console.log('------------');


// REDUCE

/*  

eina per sarasa, paima visas reiksmes is eiles ir su jomis daro viena
bendra rezultata.
pvz.: jeigu turime pazymiu sarasa, tai eina per pazymius ir suskaiciuoja
pazymiu suma

*/

const petriukoPazymiai = [10, 2, 8, 6, 4];

let petriukoPazymiuSuma = 20;
petriukoPazymiai.forEach(p => petriukoPazymiuSuma += p);
console.log(petriukoPazymiuSuma);


const reducePazymiai = petriukoPazymiai.reduce((total, paz) => total + paz, 20);
console.log(reducePazymiai);


console.log('------------');


// koks gausis tekstas, jei sujungsime visu zodziu pirmas raides

const dictionary2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

const short = dictionary2.reduce((total, word) => total + word[0], '');

console.log(short);


console.log('------------');


// SORT 


const sortAbc = ['a', 'õ', 'c', 'fabrikas', 'fancy', 'baklazanas', 'Bermudai', 'd', 'Antanas'];
const sortedAbc = sortAbc.sort();
console.log(sortAbc);

const sortList = [1, -5, 78, 2, 11, -14, 0, -3];  // isrikiuoja abeceles tvarka
console.log(sortList.sort());

// const sortedNumber = sortList.sort((a, b) => a - b ? -1 : 1);  

const sortedNumber = [...sortList].sort((a, b) => b - a);  

// prisiminti sita lygti ((a, b) => b - a); 
// ? - ternary operator - jeigu yra taip, tai grazink ta ir ana

console.log(sortedNumber);
console.log(sortList);





























