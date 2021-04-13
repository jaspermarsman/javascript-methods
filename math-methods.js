/* Opdracht 0: voorbeeld */
// Log het cijfer PI in de terminal
// ---- Verwachte uitkomst: 3.141592653589793

console.log(Math.PI);

/* Opdracht 1: */
// Bereken de omtrek van een cirkel met een diameter van 4 en log dit in de terminal. De eenheid (cm, meters, etc. maakt niet uit).
// Tip: de formule is omtrek = diameter * pi
// ---- Verwachte uitkomst: 12.566370614359172
// eerst variabele diameter declareren
// functie uitschrijven van berekening
// uitkomst loggen
const diameter = 4;
const omtrek = 4 * Math.PI;
console.log(omtrek);

/* Opdracht 2: */
// Bereken de omtrek van een cirkel met een diameter van 12 en rond dit af naar een heel getal. Log dit in de terminal.
// ---- Verwachte uitkomst: 38
// declareer een variabele voor diameter
// declareer variabele voor omtrek
// bereken omtrek door 12 te vermenigvuldigen met PI
// rond het getal af naar heel getal met round functie
// log de uitkomst in terminal
const diameter2 = 12;
const omtrek2 = diameter2 * Math.PI;
//console.log(omtrek2);
const afgerond = Math.round(omtrek2);
console.log(afgerond);

/* Opdracht 3: */
// Bereken de wortel van 9 en log dit in de terminal
// ---- Verwachte uitkomst: 3
console.log(Math.sqrt(9));


/* Opdracht 4: */
// Genereer een willekeurig getal tussen de 0 en 1 en doe dan een check:
// * is het willekeurige getal groter dan 0.5 ? Log dan het getal met "Het glas is halfvol" in de terminal
// * is het willekeurige getal kleiner dan 0.5 ? Log dan het getal met "Het glas is half leeg" in de terminal
// Tip: iedere keer als je het script opnieuw draait (wel even een extra spatie toevoegen o.i.d.) is dit getal anders ;)
// ---- Verwachte uitkomst: Bijbehorende zin afhankelijk van de uitkomst
const randomized = Math.random();

if (randomized > 0.5) {
    console.log("Het glas is half vol");
}
else if (randomized < 0.5){
    console.log("Het glas is half leeg");
}
