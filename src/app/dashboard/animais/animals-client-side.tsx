'use client'

import { Filtro } from "@/components/dashboard/animais/filtro";
import { Lista } from "@/components/dashboard/animais/lista";
import { Pagination } from "@/components/pagination";
import { ANIMAL_DATA } from "@/types/animal";
import React, { useEffect } from "react";

interface AnimalsClientSideProps {
  animals: ANIMAL_DATA,

}

export function AnimalsClientSide( { animals }: AnimalsClientSideProps ) {

  const [filteredAnimals, setFilteredAnimals] = React.useState<ANIMAL_DATA>( animals )

  const [search, setSearch] = React.useState<string>( '' )

  async function handleSetFilteredAnimals( animals: ANIMAL_DATA ) {
    setFilteredAnimals( animals )
  }



  async function handleSetSearch( search: string ) {
    setSearch( search )
  }

  useEffect( () => {
    if ( search.length <= 0 ) {
      setFilteredAnimals( animals )
    }
  }, [search] )







  return (
    <>
      <Filtro
        onSetSearch={handleSetSearch}
        onSetFilteredAnimals={handleSetFilteredAnimals} />
      <Lista
        animals={filteredAnimals} />
      <Pagination
        totalPage={animals.totalPages}
        onSetFilteredAnimals={handleSetFilteredAnimals}
        search={search}
      />
    </>
  );
}
