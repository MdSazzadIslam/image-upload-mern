const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const movieRoute = require("./routes/movieRoute");


const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(cors());
 
app.use(bodyParser.json({extended: true }))
app.use(bodyParser.urlencoded({extended: true }));

app.get("/", (req, res) => {
  res.send("API is runninmg");
});

app.use("/api/movie", movieRoute);
 
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
