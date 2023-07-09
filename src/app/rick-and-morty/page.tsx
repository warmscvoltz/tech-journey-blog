import {getPostData} from "@/lib/posts";
import {fetchGenerations, fetchPokemonByGen} from "@/lib/pokeapi";
import invariant from "tiny-invariant";
import Pokemon from "@/components/Pokemon";
import RickAndMortyTable from "@/components/RickAndMortyTable";

export default async function RickAndMortyPage() {
  return (
      <div className={'w-full'}>
          <RickAndMortyTable/>
      </div>
  )
}
