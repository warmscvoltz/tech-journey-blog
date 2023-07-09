import { redirect } from 'next/navigation'

export default async function PokemonPage() {
  return redirect('/pokemon/1')
}
