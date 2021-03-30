const movieService = require("../services/movieService");

exports.getAll = async (req, res) => {
  try {
    const movies = await movieService.getAll();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await movieService.createMovie(req.body);

    if (movie) {
      res.status(201).json({
        _id: movie._id,
        name: movie.name,
        releaseYear: movie.releaseYear,
        file: movie.file,
      });
    } else {
      return res
        .status(400)
        .send({ auth: false, message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
