const express = require('express');
const app = express();
const cors = require("cors");



    const ingredients = [
    {
        "id": "1",
        "item": "Bacon"
    },
    {
        "id": "2",
        "item": "Eggs"
    },
    {
        "id": "3",
        "item": "Milk"
    },
    {
        "id": "4",
        "item": "Butter"
    }
];

app.use(cors({
    origin: "http://89.117.36.197"
}))

app.get('/ingredients', (req, res) =>{
    res.send(ingredients); 
});
app.listen(3000, () => {
    console.log("You have connected to port 3000");
});