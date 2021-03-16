/*

Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos 
iš 3, 5 ir 7 atskirai:

0 - 11
8 - 31
-18 - 18

rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.

*/

const nuo = 100;
const iki = 200;
const daliklis = 5;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    if (i % daliklis === 0) {
        kiekis ++;
    }
}

const ats = `Skaiciu intervale tarp ${nuo} ir ${iki}, 
besidalijanciu be liekanos is ${daliklis} yra ${kiekis} vienetai.`;

console.log(ats);


/*

11 - 20   / 5

15, 20              (iki - nuo) / daliklis + 1

i += daliklis

*/ 




