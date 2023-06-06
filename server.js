// Packages
const cors = require("cors");
const env = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const schema = require("./schema/index");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");

// Environment Config
env.config();

// Express App
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross-Origin Connection Handler
app.use(cors());

// Mongoose Driver
const uri = process.env.MONGO_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Database connected");
});

// Base Route
app.get("/", (req, res) => res.send("Base Route"));

// API Route
const apiRoute = require("./routes");
app.use("/api", apiRoute);

// GraphQL Route
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// Listening to Server
app.listen(process.env.PORT, () => {
  console.log("Server up and running", process.env.PORT);
});
