import {fetchGenerations} from "@/lib/pokeapi";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default async function PokemonLayout(props: { children: React.ReactNode }) {
  const generations = await fetchGenerations()
  const validGenerations = generations.generations.map(x => x.id);

  return (
      <div className={'w-full flex flex-col items-center'}>
        <div className="tabs">
          {validGenerations.map(gen => {
            return (
                <Link key={gen} className={'tab tab-lg tab-lifted'} href={`/pokemon/${gen}`}>
                  Gen {gen}
                </Link>
            )
          })}

        </div>
        <div className={'py-4'}>
          {props.children}
        </div>
      </div>
  )
}
