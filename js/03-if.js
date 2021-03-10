/*
IF STATMENT:

logikos sablonai
if () {}
if () {} else if {}
if () {} else if {}
if () {} else if {} ... else if {}
if () {} else if {} ... else if {} else {}


palyginimo sablonai:
- visi: >, <, >=, <=, ==, != (ne lygu), ===, !==, !
- naudotini: >, <, >=, <=, ===, !==, !
- nenaudotini: ==, != (nes nera tikrinamas reiksmiu tipas)

*/

const a = 7;
const b = 4;

if (a > b) {
    const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats);
}

console.log('------------');


const c = 7;
const d = 4;

if (c < d) {
    const cdMaziau = `${c} yra maziau uz ${d}`;
    console.log(cdMaziau) 
} else {
    const cdNeMaziau = `${c} yra NE maziau uz ${d}`;
    console.log(cdNeMaziau); 
}


console.log('------------');


const e = '8';
const f = 8;

if (e !== f) {
    console.log('TAIP');
} else {
    console.log('NE');
}
    

console.log('------------');


const cookiesAgreed = false;

if (cookiesAgreed === false) {
    console.log('Ismetame cookies sutikimo bloka... 1');
}

if (!cookiesAgreed) {
    console.log('Ismetame cookies sutikimo bloka... 2');
}


console.log('------------');


const userLoggedIn = true;

if (userLoggedIn) {
    console.log('Log out');
} else {
    console.log('Log in');
}


console.log('------------');


const pomidoras = 'pomidoras';
const pomidoroIlgis = pomidoras.length;

console.log(pomidoroIlgis);


console.log('------------');


const akys = 'Rudos';

if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
} else if ( akys === 'Zalios') {
    console.log('Sexy 🥰😍');
} else if (akys === 'Rudos') {
    console.log('Melagis? 🤔');
} else if (akys === 'Pilkos') {
    console.log('Niekuo neypatingi...');
} else if (akys ==='Raudonos') {
    console.log('🤙🤙🤙');
} else {
    console.log('A tu turi akis?');
}


console.log('------------');


/* nestintas - kai logika yra viduje. Patariama perdaug giliai nenusivaikscioti... */

if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
} else {
     if (akys === 'Zalios') {
        console.log('Sexy 🥰😍');
    } else {
        if (akys === 'Rudos') {
            console.log('Melagis? 🤔');
        } else {
            if (akys === 'Pilkos') {
                console.log('Niekuo neypatingi...'); 
            } else {
                if (akys ==='Raudonos') {
                    console.log('🤙🤙🤙');
                } else {
                    console.log('A tu turi akis?');
                }
            }
         }   
    }
}


console.log('------------');


if (akys === 'Melynos') {
    console.log('Oj kokie fainulkos!!!');
} 

if (akys === 'Zalios') {
    console.log('Sexy 🥰😍');
}

if (akys === 'Rudos') {
    console.log('Melagis? 🤔');
} 

if (akys === 'Pilkos') {
    console.log('Niekuo neypatingi...');
}

if (akys ==='Raudonos') {
    console.log('🤙🤙🤙');
}

if (akys !=='Melynos' && 
    akys !=='Zalios' && 
    akys !== 'Rudos' && 
    akys !== 'Pilkos' && 
    akys ==='Raudonos') {
    console.log('A tu turi akis?');
}

