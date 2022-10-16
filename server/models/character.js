const mongoose = require('mongoose');

const Description = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Attributes = mongoose.Schema({
  strength: {
    type: Number,
    min: 0,
    required: true,
  },
  agility: {
    type: Number,
    min: 0,
    required: true,
  },
  wits: {
    type: Number,
    min: 0,
    required: true,
  },
  empathy: {
    type: Number,
    min: 0,
    required: true,
  },
});

const CharacterSchema = mongoose.Schema({
  description: Description,
  role: {
    type: String,
    required: true,
  },
  attributes: Attributes,
  skills: {
    type: Map,
    of: Boolean,
    default: {},
  },
  talents: {
    type: Map,
    of: Boolean,
    default: {},
  },
  mutations: {
    type: Map,
    of: Boolean,
    default: {},
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Character', CharacterSchema);
