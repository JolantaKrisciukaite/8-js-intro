/*

FOR LOOP (ciklas): 

for () {} - (nurodome, koki funkcionaluma norime daryti, parametrai, kaip tai norime daryti), 
{logikos blokas, ka norime daryti, kiekvienos iteracijos metu}

*/


const abc = ['r', 'y', 't', 'a', 's'];

let zodis = '';
let abcIndex = 0;

zodis += abc[abcIndex++];    
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];
zodis += abc[abcIndex++];

console.log(zodis);


console.log('------------');


for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log('ciklo pabaiga');


console.log('------------');


const zmones = ['Petras', 'Maryte', 'Jonas', 'Onute', 'Eligijus'];  // arejus - SARASAS

for ( let i = 0; i < zmones.length; i++ ) {
    const vardas = zmones[i];

    console.log(vardas);
}


console.log('------------');


const marks = [5, 7, 10, 4, 2, 10, 8, 9, 1, 3];  
let sum = 0;
// ciklas yra pasikartojancio ciklo rinkinys, paimti sekanti nari ir prisumuoti 

for (let i = 0; i < marks.length; i++) {   
    const pazymys = marks[i];
    sum += pazymys;
}
// ejimas per sarasa // 7 - nariu kiekis sarase 

const average = sum / marks.length;

console.log(sum, '/', marks.length, '=', average);


console.log('------------');


const sakinys = 'Labas rytas';


for (let i = 0; i < sakinys.length; i++) {
    const simbolis = sakinys[i];
    console.log(simbolis);
}






