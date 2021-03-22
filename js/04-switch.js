
/*

SWITCH STATEMENT: (turi tik viena klausima. 
Jeigu musu gyvunas yra suo - tai daryk ta, 
jeigu musu gyvunas yra kate, tai daryk ana ir t.t. 
Ribotu galimybiu funkcionalumas.)

Sarasas yra kompleksinis kintamasis.

switch() { case, break, default }

switch - labiau skirtas zodynui. O If'as - programine prasme labiau superior zymiai daugiau gali.

*/

const animal = 'cat';

switch (animal) {
    case 'dog':
        console.log('Bark bark');
        break;

    case 'cat':
        console.log('Meow meow');
        break;

    default:
        console.log('Unknow animal');
        break;      
}


if (animal === 'dog') {
    console.log('Bark bark');
} else if (animal === 'cat') {
    console.log('Meow meow');
} else {
    console.log('Unknow animal');
}   


console.log('------------');


const day = 6;

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

    case 4:
        console.log('ket');
        break;

    case 5:
        console.log('penk');
        break;

    case 6:
        console.log('sest');
        break;

    case 7:
        console.log('sekm');
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}


console.log('------------');


switch (day) {
    case 1:
        console.log('darbo diena');
        break;
    case 2:
        console.log('darbo diena');
        break;
    case 3:
        console.log('darbo diena');
        break;
    case 4:
        console.log('darbo diena');
        break;
    case 5:
        console.log('darbo diena');
        break;
    case 6:
        console.log('savaitgalio diena');
        break;
    case 7:
        console.log('savaitgalio diena');
        break;
    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}

console.log('------------');


if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    console.log('darbo diena');
} else if (day === 6 || day === 7) {
    console.log('savaitgalio diena');
} else {
    console.log('Tokia diena savaiteje neegzistuoja');
}

console.log('------------');


switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena')
        break;

    case 6:
    case 7:
        console.log('savaitgalio diena')
        break;

    default:
        console.log('Tokia diena savaiteje neegzistuoja');
}


console.log('------------');


// darbu arba logikos procesas.
// Jeigu esu sioje darbu dalyje, kas man dar liko padaryti.

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
}
