

console.log(84555);
console.log(3.141529654);
console.log(3, 141529654);
console.log("Labas");
console.log('rytas');
console.log("Lietuva");
console.log('Mano', 'vardas', 'yra')
console.log('Mano vardas yra');
console.log('Man yra 5 metai');

console.log('------------');

/* (multiline comment)

KINTAMŲJŲ INICIAVIMO BUDAI:

const - kintamasis, kurio reikšmės negalima iš naujo priskirti * 
(dalykas, kuris neikeičia)

let - kintamas, kurio reikšmė gali būti priskirta kiek norite kartų
(iš naujo)

var - esant galimybei NENAUDOTI!!!
(yra susijęs su failo pavadinimu - variable. Pats lanksčiausias, kas turi
pliusų ir minusų. Visų tėvas, pirmtakas)

* - yra papildomų sąlygų su kompleksiniais kintamaisiais

*/

const vardas = 'Jolanta';
console.log(vardas); 

/* ' = ' yra reikšmės priskyrimo operatorius*/

const pasisveikinimas = 'Labas rytas Lietuva!😋';
console.log(pasisveikinimas);

console.log('------------');

/* Kintamasis, kuriam priskirtas tekstas. Pavadinimus pageidaujama
rašyti iš mažųjų raidžių, be tarpų. */ 

vardas2 = 'Petras';
console.log(vardas2);

console.log('------------');

const pirmasSkaicius = 7;
const antrasSkaicius = 77;
const suma = pirmasSkaicius + antrasSkaicius;

console.log(pirmasSkaicius);
console.log(antrasSkaicius);
console.log(suma);

console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);

const MathText = pirmasSkaicius + ' + ' + antrasSkaicius + ' = ' + suma;
console.log(MathText);

console.log('------------');

const name = 'Petras';
const age = 99;

// Petras age is 99.

const petrasAge = name + ' age is ' + age + '.';
console.log(petrasAge);

console.log('------------');

// sąrašas (array)

const pazymiai = [5, 7, 8, 9];
console.log(pazymiai);

const abc = ['a', 'b', 'c'];
console.log(abc);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const pazymiuSuma = pazymiai[0] + pazymiai[1] + pazymiai[2];
const pazymiuKiekis = pazymiai.length;
const pazymiuVidurkis = pazymiuSuma / pazymiuKiekis;

console.log('Pazymiu suma:', pazymiuSuma);
console.log('Pazymiu kiekis:', pazymiuKiekis);
console.log('Pazymiu vidurkis:', pazymiuVidurkis);



console.log('------------');


// veiksmai su kintamaisiais

const abc1 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc1);

// Iš mums žinomos 6 raidžių abėcėlės paskutinė yra 'f'.

const abcIlgis =  abc1.length;
const paskutinesRaidesPozicija = abcIlgis -1;
const paskutineRaide = abc1[paskutinesRaidesPozicija];

const abcAtsakymas = 'Iš mums žinomos ' + abcIlgis + ' raidžių abėcėlės paskutinė yra " ' + paskutineRaide + ' ".';
console.log(abcAtsakymas);

console.log('------------');



