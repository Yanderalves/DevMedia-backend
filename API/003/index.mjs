import express from "express";
import chooseFact from "./historicalFactsTRA.mjs";
import validateYear from "./validate.mjs";

const app = express();

app.get("/", (req, res) => {
    let year = req.query.year;

    if (validateYear(year)) {
        let fact = chooseFact(year);

        res.json({ success: true, year: Number(year), fact: fact })
    } else {
        res.status(400).json({ success: false, message: "verifique os dados inseridos." })
    }

})

app.listen(8080)