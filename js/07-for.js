/*



*/


const rytas = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let rytasIndex = 0;

zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];
zodis += rytas[rytasIndex++];

console.log(zodis);


for (let i = 3; i <= 5; i++) {
    console.log(i);
}

console.log('ciklo pabaiga');


console.log('------------');


const zmones = ['Petras', 'Maryte', 'Jonas', 'Onute', 'Eligijus'];  // arejus - SARASAS, miau miau

for ( let i = 0; i < zmones.length; i++ ) {
    const vardas = zmones[i];

    console.log(vardas);
}


console.log('------------');


const marks = [5, 7, 10, 4, 2, 10, 8];  // ciklas yra pasikartojancio ciklo rinkinys, paimti sekanti nari ir prisumuoti 
let sum = 0;


for (let i = 0; i < marks.length; i++) {   // ejimas per sarasa // 7 - nariu kiekis sarase 
    const pazymys = marks[i];
    sum += pazymys;

    sum += marks[i];
}

const average = sum / marks.length;

console.log(sum, '/', marks.length, '=', average);


console.log('------------');


const sakinys = 'Labas rytas';

console.log(sakinys[2]);


for (let i = 0; i < sakinys.length; i++) {
    const simbolis = sakinys [i];
    console.log(simbolis);

}




