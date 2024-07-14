import React from 'react';
import {Pokemon as PokemonType} from '@/lib/pokeapi'

interface PokemonProps {
  pokemon: PokemonType
}

const Pokemon: React.FC<PokemonProps> = (props) => {
  const {pokemon} = props
  return (
      <div className={'flex flex-col items-center min-w-[150px] border border-black rounded shadow m-1'}
           style={{ backgroundColor: pokemon.backgroundColor }}
      >
        <img
            title={pokemon.name}
            height={96}
            width={96}
            src={pokemon.sprite}
            className={"hover:animate-hop duration-300"}
            alt={pokemon.name}
        />
        <div className={'flex flex-col items-center'}>
          <div className={'capitalize'}>{pokemon.name}</div>
          <div className={'flex items-center justify-between'}>
            {pokemon.types.map((t) => (
                <img key={t.name} src={t.typeBadgeUrl} alt={'type'} className={'p-1'}/>
            ))}
          </div>
        </div>
      </div>
  );
};
export default Pokemon;
