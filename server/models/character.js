const mongoose = require('mongoose');

const Weapon = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bonificaiton: {
    type: Number,
    required: true,
  },
  damage: {
    type: Number,
    required: true,
  },
  range: {
    type: Number,
    min: 0,
    max: 4,
    required: true,
  },
  comment: {
    type: String,
  },
});

const Action = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const Mutation = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  actions: [Action],
});

const Talent = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

const Skill = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  failure: {
    type: String,
    required: true,
  },
  success: {
    type: String,
    required: true,
  },
  stunt: {
    type: String,
    required: true,
  },
});

const Conditions = mongoose.Schema({
  starving: {
    type: Boolean,
    required: true,
  },
  dehydrated: {
    type: Boolean,
    required: true,
  },
  sleepless: {
    type: Boolean,
    required: true,
  },
  hypothermic: {
    type: Boolean,
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
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  attributes: Attributes,
  skills: [Skill],
  talents: [Talent],
  mutations: [Mutation],
  weapons: [Weapon],
  conditions: Conditions,
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Character', CharacterSchema);
