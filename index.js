const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then(() => console.log("✅ MongoDB ulandi"))
  .catch((err) => console.log("❌ Xato:", err));

const flagSchema = new mongoose.Schema({
  id: String,
  name: String,
  code: String,
});

const Flag = mongoose.model("flags", flagSchema, "flags");

// const countries = [
//   { name: "Uzbekistan", code: "uz" },
//   { name: "Kazakhstan", code: "kz" },
//   { name: "Russia", code: "ru" },
//   { name: "USA", code: "us" },
//   { name: "Japan", code: "jp" },
//   { name: "Germany", code: "de" },
//   { name: "France", code: "fr" },
//   { name: "Turkey", code: "tr" },
//   { name: "Italy", code: "it" },
//   { name: "Brazil", code: "br" },
// ];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function generateOptions(numOptions = 3) {
  const countries = await Flag.find();

  if (!countries.length) {
    throw new Error("❌ Ma'lumot topilmadi. flags kolleksiyasi bo‘sh!");
  }

  const correctCountry =
    countries[Math.floor(Math.random() * countries.length)];
  const otherCountries = countries.filter(
    (c) => c.name !== correctCountry.name
  );

  const wrongCountries = shuffle(otherCountries).slice(0, numOptions - 1);

  const options = [
    ...wrongCountries.map((c) => ({
      title: c.name,
      value: false,
    })),
    {
      title: correctCountry.name,
      value: true,
    },
  ];

  const finalOptions = shuffle(options);

  return {
    options: finalOptions,
    flag: `https://flagcdn.com/w320/${correctCountry.code}.png`,
  };
}

app.get("/quiz", async (req, res) => {
  try {
    const question = await generateOptions(4);
    res.json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server xatosi" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/quiz`);
});
