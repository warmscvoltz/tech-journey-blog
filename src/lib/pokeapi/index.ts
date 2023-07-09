import {fetchPokemonByGen, fetchPokemonByIds} from "@/lib/pokeapi/fetch-pokemon";
import {fetchGenerations} from "@/lib/pokeapi/fetch-generations";
import { Pokemon }  from "@/lib/pokeapi/fetch-pokemon";

export type { Pokemon }
export { fetchGenerations, fetchPokemonByGen, fetchPokemonByIds}
