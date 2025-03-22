'use client'

import { useEffect } from "react";
import { ANIMAL_TYPE } from "@/types/animal";

interface ListaParentalProps {
  animals: ANIMAL_TYPE[];
  register: any;
  searchQuery: string;
}

export function ListaParental( { searchQuery, animals, register }: ListaParentalProps ) {
  useEffect( () => {
    // Reset the select value when searchQuery changes
    if ( searchQuery.length === 0 ) {
      register( 'parentalId' ).onChange( { target: { value: '' } } );
    }
  }, [searchQuery, register] );

  if ( searchQuery.length <= 0 ) return null;

  return (
    <div className="flex flex-col">
      {animals.length <= 0 && searchQuery.length > 0 ? (
        <p>Nenhum animal encontrado</p>
      ) : (
        <div>
          <p>Selecione o animal para relacionar parentesco:</p>
          <select
            {...register( 'parentId' )}
            defaultValue="Selecione um animal"
            className="mt-4 w-full text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4">
            <option value="" disabled>Selecione um animal</option>
            {animals.map( ( animal ) => (
              <option value={animal.id} key={animal.id}>
                {animal.nome} - {animal.especie} - {animal.raca}
              </option>
            ) )}
          </select>
        </div>
      )}
    </div>
  );
}