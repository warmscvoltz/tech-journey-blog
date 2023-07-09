import React from 'react';
import {Character} from "@/lib/rick-and-morty";
import {sr} from "date-fns/locale";
import {clsx} from "@/utils/styles";
import Image from "next/image";

interface RickAndMortyCharacterProps {
  character: Character
}

const RickAndMortyCharacter: React.FC<RickAndMortyCharacterProps> = (props) => {
  const {character} = props;

  return (
      <div className="card bg-neutral m-1 shadow w-[200px]">
        <figure><Image width={192} height={192} src={character.image} alt={character.name}/></figure>
        <div className="card-body overflow-hidden p-4">
          <h2 className="card-title truncate">{character.name}</h2>
          <div className={'flex items-center gap-1'}>
            <div className={clsx('bg-green-500 h-2 w-2 rounded-full', {'bg-red-500': character.status === 'Dead'})}/>
            <div className={'overflow-hidden'}>
              <div className={'overflow-hidden truncate'}>{character.status} - {character.species}</div>
            </div>
          </div>
        </div>
      </div>
  )
};
export default RickAndMortyCharacter;
