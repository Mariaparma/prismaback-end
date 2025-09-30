import MovieModel from "../models/movies.model.js";

class MovieController {
  async findAll(req, res) {
    const { name, platform } = req.query;

    // console.log("Nome", name);
    // console.log("Plataforma", platform);

    try {
      const movies = await MovieModel.findAll(title, category, duration, sinopse, releseYear);

      return res.status(200).json(movies);
    } catch (error) {
      console.error("Error finding all movies", error);
      return res
        .status(500)
        .json({ message: "Error finding all movies", error });
    }
  }

  async create(req, res) {
    try {
      const {title, category, duration, sinopse, releseYear } = req.body;

      // Validação básica
      if (!title || !category || !duration || !sinopse || !releseYear) {
        return res.status(400).json({
          error: "Name and platform fields are required!",
        });
      }

      const data = {
        title,
        category,
        duration,
        sinopse,
        releseYear
      };

      const newMovie = await MovieModel.create(data);

      return res.status(201).json({
        message: "New Movie successufully created! DuoLingo singing!",
        newMovie,
      });
    } catch (error) {
      console.error("Error creating a new movie", error);
      res.status(500).json({ error: "Error creating a new movie" });
    }
  }
}

export default new MovieController();