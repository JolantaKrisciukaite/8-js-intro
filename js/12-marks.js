


function pazymiuVidurkis(vardas, pazymiai) {
    let suma = 0;
    
for (let i = 0; i < pazymiai.length; i++) {
    suma += pazymiai[1]  
}

const average = suma / pazymiai.length;

// Vardenis: pazymiu vidurkis yra 6.
console.log(`${vardas}: pazymiu vidurkis yra $ {average}.`);

}

const mokykla = [
    ['Petriukas', [10, 2, 8, 4]],
    ['Maryte', [10, 8, 6, 4]],
    ['Alphe', [10, 9, 10, 7, 9, 2, 7]]
];

for (let i = 0; i < mokykla.length; i++) {
    console.log('----------');
    console.log(mokykla[i]);
    console.log(mokykla[0]);
    console.log(mokykla[1]);

    pazymiuVidurkis(name, marks);

    pazymiuVidurkis(mokykla[i][0], mokykla[i][0]);
}