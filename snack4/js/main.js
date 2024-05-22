// Creazione dell'array di persone
const persone = [
  { nome: "Tizio", cognome: "Caio", eta: 20 },
  { nome: "Pippo", cognome: "Pluto", eta: 15 },
  { nome: "Giovanni", cognome: "Rossi", eta: 18 },
  { nome: "Maria", cognome: "Bianchi", eta: 17 },
];

// Stampa dell'array persone
console.log(persone);

// Creazione del nuovo array con le frasi
const personeInfo = persone.map((persona) => {
  const puoGuidare = persona.eta >= 18 ? "può guidare" : "NON può guidare";
  return {
    ...persona,//operatore spread
    info: `${persona.nome} ${persona.cognome} ${puoGuidare}`,
  };
});

// Stampa del nuovo array
console.log(personeInfo);
