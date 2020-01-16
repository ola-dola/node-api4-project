require('dotenv').config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const port = process.env.PORT || 4000;

const app = express();

app.use(express.static('client/build'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/users", (req, res) => {
  res.status(200).send(`
    <h1 style="color: darkgreen; padding: 25px; margin: 20px; border: 2px dotted yellow">
        This api is a work in progess. Check in later.
    </h1>
    `);
});

app.use((req, res) => {
  res.json("I'm alive!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
