
/*

TERNARY OPERATOR: ? (klaustukas)

palyginimas ? ka daryti jei tenkina logika : ka daryti jei logikos
netenkina

naudojamas gauti vienai is dvieju reiksmiu

palyginimas? true : false

'nestinti' - kodas kode

*/


const a = 5;
const b = 7;

let ats = ''; // let, nes ketiname pakeisti kintamojo reiksme. Jeigu butu const - butu klaida.

if (a > b) {
    ats = 'daugiau';
} else {
    ats = 'ne daugiau';
}

console.log(ats);


// inline if'as


const c = 3;
const d = 5;

const ats2 = c > d ? 'daugiau' : 'ne daugiau';


console.log(ats2);


console.log('------------');


const pazymiai = [7, 10, 7]
const suma = pazymiai[0] + pazymiai[1] + pazymiai[2];

const vidurkis = suma / pazymiai.length;
console.log(vidurkis);


