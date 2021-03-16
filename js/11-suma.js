/* 

const a = 8;
const b = 5;

const s = (a + b) * 10;
console.log(s);

const c = 99;
const d = 88;

const s2 = (c + d) * 10;
console.log(s2);

const e = 54155;
const f = 89514;

const s3 = (e + f) * 10;
console.log(s3);

*/


const a = 8;
const b = 5;

const c = 99;
const d = 88;

const e = 2;
const f = 3;


// const s = (a + b) * 10
// console.log(s);


function desimteriopaSuma(pirmas, antras) {
    const s = (pirmas + antras) * 10;
    console.log(s);   
}

desimteriopaSuma(a, b);
console.log('--------');
desimteriopaSuma(c, d);
console.log('--------');
desimteriopaSuma(e, f);
console.log('--------');


console.log('------------');


function labas(vardas, amzius, vietovardis) {
    console.log(`Labas, as esu ${vardas}, ir man ${amzius} metai ir 
    gyvenu ${vietovardis}.`);
}

labas('Petras', 88, 'vilnius');
labas('Maryte', 77, 'kaunas');
labas('Alphe', 1, 'namie');



// f(x) = x * x;

function kvadratu(x) {
    console.log(x * x);
}

kvadratu(5)
kvadratu(10)
kvadratu(15)
kvadratu(25)


 // Pavyzdys is 'reverse' aplanko


const pirmasZodis = 'abcdef';

function reversStrings(text) {
    let reverse = '';

for (let i = 0; i < text.length; i++) {
     reverse = text[i] + reverse;
}

    console.log(text, '->', reverse);
}


console.log('------------'); 

/* kaip 'abcdef' parasyti, is kitos puses, naudojant funkcija */ 


const pirmasZodis2 = 'Labas rytas';
reversStrings(pirmasZodis2);

reversStrings('Lietuva');
reversStrings('sedek uzu kedes');
reversStrings('sula');




