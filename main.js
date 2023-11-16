const safeParseJSON = (JSONstringa) => {
  try {
    let safeStringa = JSON.parse(JSONstringa);
    console.log(safeStringa);
  } catch {
    console.log("dai non va");
  }
  return safeStringa;
};
const JsonSample = `{
  "browsers": {
    "firefox": {
      "name": "Firefox",
      "pref_url": "about:config",
      "releases": {
        "1": {
          "release_date": "2004-11-09",
          "status": "retired",
          "engine": "Gecko",
          "engine_version": "1.7"
        }
      }
    }
  }
}`;
safeParseJSON(JsonBooks);
//
//
//
//
//esercizio 2
const arrayACaso = ["cane", "ladro", "laido", "bastardo"];
const logElement = (array) => {
  array.forEach((element) => console.log(element));
};

const offese = logElement(arrayACaso);
//
//
//
//esercizio3
const divide = (dividendo, divisore) => Number(dividendo) / Number(divisore);
const number1 = Math.floor(Math.random() * 10);
const number2 = Math.floor(Math.random() * 10);
console.log(number1, "/", number2);
try {
  let result = divide(number1, number2);
  if (number2 === 0) {
    throw error("no");
  }
} catch {
  console.log("non si può dividere per 0");
}
//
//
//
//
//
//esercizio 4
//prende un array, convalida che contenga
//solo numeri e restituisce un nuovo array
//con ogni numero elevato al quadrato

const processNumber = (array) => {
  let arrayMoltiplicato = [];
  let arrayFiltrato = [];
  const arrayX = array.forEach((elem, i) => {
    arrayFiltrato = array.filter((elem) => typeof elem === "number");
  });
  for (let j = 0; j < arrayFiltrato.length; j++) {
    let numQuadrato = arrayFiltrato[j] * arrayFiltrato[j];
    arrayMoltiplicato.push(numQuadrato);
  }
  return arrayMoltiplicato;
};

const numbers = [1, 2, 3, 8, "attenzione al clandestino", 9];
const funzione = processNumber(numbers);
console.log(funzione);
//
//
//
//
//
//esercizio5
//ritorna un array con "elemento [indice]:[elemento]"
const mapWithIndex = (array) => {
  let stringa = "";
  let arrayY = [];
  array.forEach((elem, i) => {
    stringa = `${elem}[${i}]:[${elem}]`;
    arrayY.push(stringa);
  });
  return arrayY;
};
const roba = mapWithIndex(arrayACaso);
console.log(roba);
