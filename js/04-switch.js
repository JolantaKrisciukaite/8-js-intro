/*

SWITCH STATEMENT: (turi tik viena klausima, Jeigu musu gyvunas yra suo - tai daryk ta, 
jeigu musu gyvunas yra kate, tai daryk ana ir t.t. 
Ribotu galimybiu funkcionalumas.)

Sarasas yra kompleksinis kintamasis.

switch() { case, break, default }

*/ 

const animal = 'dog';

switch (animal) {
    case 'dog':
        console.log ('Bark bark');
        break;

    case 'cat':
        console.log ('Meow meow');
        break;

    default:
        console.log ('Unknow animal');
        break;      
}


if (animal === 'dog') {
    console.log ('Bark bark');
} else if (animal === 'cat') {
    console.log ('Meow meow');
} else {
    console.log ('Unknow animal');
}   


console.log('------------');


const day = 3;

switch (day) {
    case 1:
        console.log('pirm');
        break;

    case 2:
        console.log('ant');
        break;

    case 3:
        console.log('tre');
        break;

    default:
        console.log('Tokia diena savaityje neegzistuoja');
}


switch (day) {
    case 1:
    case 3:
    case 5:
    case 7:
        console.log('nelygine diena')
        break;

    case 2:
    case 4:
    case 6:
        console.log('lygine diena')
        break;

    default:
        console.log('Tokia diena savaityje neegzistuoja');
}


if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5 ) {
    console.log('darbo diena');
} else if (day === 6 || day === 7) {
    console.log('savaitgalio diena');
} else {
    console.log('Tokia diena savaityje neegzistuoja');
}

console.log('------------');


// darbu arba logikos procesas.
// Jeigu esu sioje darbu dalyje, kas man dar liko padaryti.


const process = 4;


if (process === 1) {
    console.log('paimti puodeli');
} else if (process === 2) {
    console.log('isideti arbatos');
} else if (process === 3) {
    console.log('isideti saldikli');
} else if (process === 4) {
    console.log('ipilti vandens');
} else if (process === 5) {
    console.log('ismaisyti');
} else if (process === 6) {
    console.log('gerti');
} else if (process === 7) {
    console.log('Tai jau viska sekmingai atlikai');
    
    
console.log('------------');


const process = 1;


switch (process) {
    case 1:
        console.log('paimti puodeli');
    case 2:
        console.log('isideti arbatos');
    case 3:
        console.log('isideti saldikli');
    case 4:
        console.log('ipilti vandens');
    case 5:
        console.log('ismaisyti');
    case 6:
        console.log('gerti');
        break;

    default:
        console.log('Tai jau viska sekmingai atlikai');
} }
