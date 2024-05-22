// Creazione dell'array di animali
const animali = [
  { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
  { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
  { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },
];
// Stampa dell'array animali
console.log(animali);

// Filtraggio dell'array per ottenere solo i mammiferi
const mammiferi = animali.filter((animale) => animale.classe === "mammiferi");

// Stampa dell'array dei mammiferi
console.log(mammiferi);
