import { getAllAnimals } from "@/actions/get-all-animals";
import { revalidateTagHook } from "@/actions/revalidate-tag";
import { ANIMAL_DATA } from "@/types/animal";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";

interface PaginationProps {

  onSetFilteredAnimals: ( animals: any ) => void,
  search: string,
  totalPage: number
}

export function Pagination( { totalPage, onSetFilteredAnimals, search }: PaginationProps ) {

  const [currentPage, setCurrentPage] = useState<number>( 1 )

  async function handleNextPage( type: string ) {




    if ( currentPage === 1 && type === "back" ) {
      return
    }

    if ( type === "next" && currentPage === totalPage ) {
      return
    }

    if ( type === "back" && currentPage > 1 ) {
      const animals = await getAllAnimals( search, currentPage - 1 )
      onSetFilteredAnimals( animals )
      setCurrentPage( currentPage - 1 )

    }
    if ( type === "next" ) {
      const animals = await getAllAnimals( search, currentPage + 1 )
      onSetFilteredAnimals( animals )
      setCurrentPage( currentPage + 1 )
    }

    revalidateTagHook( 'all-animals' );
  }


  if ( totalPage <= 1 ) return null
  return (
    <div className="mt-2 flex w-full justify-end">
      <div className="flex gap-2">
        <div
          onClick={() => handleNextPage( "back" )}
          className="flex cursor-pointer items-center h-[50px] justify-center border border-indigo-200 text-indigo-950 px-6 py-2 rounded-xl">
          Voltar
        </div>
        <div
          className={`flex items-center justify-center border border-indigo-400 cursor-pointer rounded-xl  h-[50px] bg-indigo-100 text-indigo-950 px-6 py-2 `}>
          {currentPage}
        </div>
        <div
          onClick={() => handleNextPage( "next" )}
          className="flex cursor-pointer items-center h-[50px] justify-center border border-indigo-200 px-6 py-2 rounded-xl text-indigo-950">
          Próxima
        </div>
      </div>
    </div>
  );
}
