const Dev = require("../models/Dev");
const axios = require("axios");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;
    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );
      const { name = login, avatar_url, bio } = response.data;
      const techsArray = parseStringAsArray(techs);
      console.log(name, avatar_url, bio, github_username);
      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        name,
        avatar_url,
        bio,
        github_username,
        techs: techsArray,
        location
      });
    }
    return res.json(dev);
  },
  async destroy(req, res) {
    const github_username = req.params.github_username;
    let dev = await Dev.findOne({ github_username });
    console.log(dev);
    dev.remove(function(err, user) {
      if (err) return console.error(err);

      res
        .status(200)
        .send(`Usuario : ${github_username} foi deletado com sucesso`);
    });
  }
};
