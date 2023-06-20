const { Router } = require('express');
const getPokemons = require('../handlers/getPokemons');
const getPokemonById = require('../handlers/getPokemonById');
const createPokemon = require('../handlers/postNewPokemon');
const pokeType = require('../handlers/pokeType');

const router = Router();

router.get("/pokemons", getPokemons);
router.get("/pokemons/:id", getPokemonById);
router.post("/pokemons", createPokemon);
router.get("/types", pokeType);

module.exports = router;