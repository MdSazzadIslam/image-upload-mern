const movieModel = require("../models/movieModel");

class movieService {
  static async createMovie(data) {
    const movie = new movieModel({
      name: data.name,
      releaseYear: data.releaseYear,
      file: data.file,
    });

    return await movieModel(movie).save();
  }

  static async getAll() {
    return await movieModel.find({});
  }
}

module.exports = movieService;
