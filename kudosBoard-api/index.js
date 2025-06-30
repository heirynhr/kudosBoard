const express = require('express')

const app = express();

app.use(express.json());

const PORT =3000;

const boardRouter = require("./routes/boardsRoutes");
app.use("/boards", boardRouter);
const cardRouter = require("./routes/cardRoutes");
app.use("/cards", cardRouter);

app.get('/', (req, res) => {
    res.send('Welcome to our Kudos Board!');
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})