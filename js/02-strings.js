
/*
VISOS KOMBINACIJOS DARBUI SU TEKSTU (STRINGS)
*/


// Šiandien yra: kovo dešimta.
const menuo = 'Kovo';
const diena = 'dešimta';

const dayString = 'Šiandien yra: ' + menuo + ' ' + diena + '.';
console.log(dayString);

// Čia yra dviguba (") kabutė
const dvigubaKabute = 'Čia yra dviguba (") kabutė.';
console.log(dvigubaKabute);

// Čia yra vienguba (') kabutė
const viengubaKabute = "Čia yra dviguba (') kabutė.";
console.log(viengubaKabute);

// Turiu viengubą (') ir dvigubą (") kabutes.
// (\") - igboravimas, kad simbolis taptų turinio dalimi.
const viengubaDviguba = "Turiu viengubą (') ir dvigubą (\") kabutes."
console.log(viengubaDviguba);

// Turiu dvigubą (") ir viengubą (') kabutes.
const dvigubaVienguba = 'Turiu dvigubą (") ir viengubą (\') kabutes';
console.log(viengubaDviguba);

// Max saugumas dvigubą (") ir viengubą (') kabutes.
const maxKabutes = 'Max saugumas dvigubą (") ir viengubą (\') kabutes.';
console.log(maxKabutes);

// Max saugumas dvigubą (") ir viengubą (') kabutes.
const maxKabutes2 = "Max saugumas dvigubą (\") ir viengubą (\') kabutes.";
console.log(maxKabutes2);

console.log('------------');


const navHTML = '<nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                </nav>';
console.log(navHTML);


console.log('------------');


// Mano vardas: Petras.
const vardas = 'Maryte';
const petrasIntro = 'Mano vardas: ' + vardas + '.' ;
console.log(petrasIntro);

// Backtikck kabutės, su kuriuo galima aprašinėti tekstą.
// ${vardas} - template literals.
const petrasBacktick = `Mano vardas: ${vardas}.`;
console.log(petrasBacktick);

// Naujausias pažymys: 2 
const marks = [10, 5, 8, 7, 2, 10, 8, 6];
const markSentence0 = `Pirmas pažymys: ${marks[0]}.`;
console.log(markSentence0);
const markSentence1 = `Antras pažymys: ${marks[1]}.`;
console.log(markSentence1);
const markSentence = `Naujausias pažymys: ${marks[marks.length -1]}.`;
console.log(markSentence);


console.log('------------');


const navHTML2 = `<nav>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </nav>`;
console.log(navHTML2);







