const mongoose = require("mongoose");
const schema = mongoose.Schema;

const introSchema = new schema({
  name: String,
  specialization: Array,
});

module.exports = mongoose.model("Intro", introSchema);
