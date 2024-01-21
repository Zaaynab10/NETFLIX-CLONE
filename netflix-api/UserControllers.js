const UserModel = require("./UserModel.js");

const addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await UserModel.findOne({ Email: email });

    if (user) {
      user.LikedMovies.push(data);
      await user.save();
    }

    res.status(202).json({ message: "Film ajouté aux films aimés avec succès" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'ajout du film aux films aimés" });
  }
};

module.exports = addToLikedMovies;
