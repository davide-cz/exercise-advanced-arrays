//6. Crea una funzione removeShortWords che prende un array di stringhe
// e una lunghezza minima
//Dovrebbe restituire un nuovo array contenente
//solo le stringhe che sono più lunghe della lunghezza minima.
//Usa .filter() e assicurati che la funzione non tenga conto
// delle maiuscole e minuscole.
const removeShortWords = (array, numeroMin) => {
  //for (let i=0;i<array.length;i++){
  let arrayDiStringhe = array.filter(
    (elemento) => typeof elemento === "string"
  );
  let onlyLongWordArray = arrayDiStringhe.filter(
    (elem) => elem.length > numeroMin
  );
  return onlyLongWordArray;
};

const arrayACaso = ["cane", "ladro", 555, "laido", 45, "bastardo"];
let result = removeShortWords(arrayACaso, 4);
console.log(result);
