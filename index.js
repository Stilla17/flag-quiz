const express = require("express");
const cors = require("cors"); 
const app = express();
const PORT = 3000;

app.use(cors()); 

const countries = [
  { name: "Uzbekistan", code: "uz" },
  { name: "Kazakhstan", code: "kz" },
  { name: "Russia", code: "ru" },
  { name: "USA", code: "us" },
  { name: "Japan", code: "jp" },
  { name: "Germany", code: "de" },
  { name: "France", code: "fr" },
  { name: "Turkey", code: "tr" },
  { name: "Italy", code: "it" },
  { name: "Brazil", code: "br" }
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateOptions(numOptions = 3) {
  const correctCountry = countries[Math.floor(Math.random() * countries.length)];
  const otherCountries = countries.filter(c => c.name !== correctCountry.name);

  const wrongCountries = shuffle(otherCountries).slice(0, numOptions - 1);

  const options = [
    ...wrongCountries.map(c => ({
      title: c.name,
      value: false
    })),
    {
      title: correctCountry.name,
      value: true
    }
  ];

  const finalOptions = shuffle(options);

  return {
    options: finalOptions,
    flag: `https://flagcdn.com/w320/${correctCountry.code}.png` 
  };
}

app.get("/quiz", (req, res) => {
  const question = generateOptions(4);
  res.json(question);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/quiz`);
});
