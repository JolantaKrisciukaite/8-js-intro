/*

Kintamieji - jo atmintyje yra laikoma informacija. 
(Vardas = Jolanta)

Sąlygos sakiniai - iššakoti logiką pagal ką daryti kai daugiau / mažiau, 
tiesa/netiesa. 
(Galime skaidyti logiką į atskiras šakas)

Ciklai - kai turime sąrašą su informacija, kuri yra vienodos struktūros.

(Sąrašas, kuriame yra tik skaičiai. Sąrašą galime sususmuoti, jeigu tai 
yra pažymiai. Surasti didžiausią ar mažiausią pažymį, medianą, pažymių 
vidurkį ir t.t. Tai yra darbas su sąrašais)
(Kiek yra pažymių, kurie yra daugiau už 5?)

Funkcijos - aprašome logiką, kuria norime perpanaudoti N kartų, tik su 
galimai skirtingais parametrais.
(Paskaičiuoti vidurkius ir pan. Ji yra apvalkalas ant viršaus, visko, kas
parašyta virš jos.)

Event'ai (event listeners) - skirta stebėti įvykius (click, scroll,
keypress ir pan.) į kuriuos reikia sureguoti iškviečiant norimą funkciją.
(Vienintelis JavaScript'as turi šią funkciją. Jis vienintelis gali dirbti 
naršyklėje.) 

*/

/*

1. if - (skliaustuose) gauname patikrinima. Kas yra  <, >, ===, !==
Kai yra klausimas 'Jeigu' - tada spresime su if'u.

2. switch - (skliaustuose) gauname parametra ko ieskoti keisuose.

3. for - (skliaustuose) gauname tris parametru grupes, nuo ko pradeti, 
iki kada galima testi, kaip keisti iteracijos kintamaji.

4. function - (skliaustuose) gauname parametrus, su kuriais turesime
dirbti. Funkcija yra uzdara 'eko sistema'. 
Funkcijai negalima rasyti let'u ir const'antu! Tiesiog yra skiriamas
kintamojo pavadinimas.

5. ? - ternary operator - similar to if...else...else if...else.

6. isNaN , '' + (pakeicia i bet koki simboli i tekstini varianta), 
-Math.abs , !isFinite - naudojami parametru validacijose.

7. Skaiciu aplavinimo funkcija:

Jeigu norime apvalinti i apacia (i grindis) - Math.floor().
Numeta viska, kas yra po kablelio.
Apvalinama iki artimiausio sveiko skaiciaus, i mazesne puse.

Jeigu norime apvalinti i virsu (link lubu) - Math.ceil().
Apvalins i didesne puse.

Jeigu norime apvalinti pagal matematine taisykle - Math.round().
Apvalina, kaip iprastoje matematikoje.

8. % - padeda apskaiciuoti liekana.

9. parseInt - ('3.14abrakadabra')- is teksto istraukia sveikus skaicius,
pvz.: 3.14 ---> 3.

10. parseFloat- ('3.14abrakadabra')- is teksto istraukia skaicius, 
kurie yra su kablelius pvz.: 3.14 ---> 3.14.

11. Key value - objektus sudaro raktazodis ir reiksme.

12.!Array.isArray(list) - rasome, kuomet kreipiames i arejaus sarasa.

13. continue - ne eik toliau vykdyti logika, o eik i sekancia ciklo iteracija.
Eina i sekancia ciklo iteracija.

14. isFinite - baigtinis skaicius.
Testams naudojame: infinity, null, NaN, [], (), {}, minusines reiksmes,
true, false.

*/

/*

(parametrai); {logika}; [arejus]

*/

// Boolean - means 'true or false'.

