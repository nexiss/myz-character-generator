const Character = require('../models/character');

exports.createCharacter = async (req, res) => {
  try {
    const character = new Character(req.body);

    await character.save();

    res.send(character);
  } catch (error) {
    console.error(error);
    res.status(500).send('error happend');
  }
};

exports.getCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).send('error happend');
  }
};

exports.updateCharacter = async (req, res) => {
  try {
    const { name, role } = req.body;
    let character = await Character.findById(req.params.id);

    if (!character) {
      res.status(404).json({ msg: 'Character not found' });
    }

    character.name = name;
    character.role = role;

    character = await Character.findOneAndUpdate(
      { _id: req.params.id },
      character,
      { new: true }
    );

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).send('error happend');
  }
};

exports.getCharacter = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);

    if (!character) {
      res.status(404).json({ msg: 'Character not found' });
    }

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).send('error happend');
  }
};

exports.deleteCharacter = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);

    if (!character) {
      res.status(404).json({ msg: 'Character not found' });
    }

    await Character.findOneAndRemove({ _id: req.params.id });

    res.json({ msg: 'Character deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('error happend');
  }
};
