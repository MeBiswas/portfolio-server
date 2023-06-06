const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
	skill: String,
	proficiency: Number,
});

module.exports = mongoose.model("Skills", skillsSchema);
