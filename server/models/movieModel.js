const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  releaseYear: {
    type: Number,
    required: true,
  },

  file: {
    type: String,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  updateDate: {
    type: Date,
  },
});
const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie;
