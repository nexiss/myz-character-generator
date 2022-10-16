// Character paths
const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');
// api/characters
router.post('/', characterController.createCharacter);
router.get('/', characterController.getCharacters);
router.put('/:id', characterController.updateCharacter);
router.get('/:id', characterController.getCharacter);
router.delete('/:id', characterController.deleteCharacter);
router.delete('/', characterController.deleteCharacters);

module.exports = router;
