const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
	tenure: String,
	company: String,
	designation: String,
	description: String,
});

module.exports = mongoose.model("Experience", experienceSchema);
