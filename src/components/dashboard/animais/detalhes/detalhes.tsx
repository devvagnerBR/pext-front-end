'use client'

import { deleteAnimal } from "@/actions/delete-animal";
import { revalidateTagHook } from "@/actions/revalidate-tag";
import { ANIMAL_TYPE } from "@/types/animal";
import { FloppyDisk, PencilSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface DetalhesProps {

  animal: ANIMAL_TYPE
}

export function Detalhes( { animal }: DetalhesProps ) {

  const router = useRouter();

  const {
    id,
    nome,
    microchip,
    especie,
    raca,
    createdAt,
    parentId,
    doencas,
    maturidade,
    origem,
    porte,
    sexo,
    status,
    comportamento,
    children,
  } = animal;

  async function handleDeleteAnimal() {
    const response = await deleteAnimal( id );
    console.log( response );
    if ( response ) {
      await revalidateTagHook( 'all-animals' );
      await revalidateTagHook( 'update-last-animals' );
      await revalidateTagHook( 'update-animal-by-id' );
      router.push( '/dashboard/animais' );
    }
  }


  return (
    <div className=" max-[1280px]:p-4 w-fit gap-8 flex  max-md:flex max-md:flex-col max-md:w-full" >
      <div className="bg-gray-100/70 rounded-2xl p-8 flex flex-col gap-4 max-md:order-2  max-md:p-4 max-md:gap-2">
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Nome:</h4>
          <h5 className="font-light capitalize">{nome}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Id do Chip:</h4>
          <h5 className="font-light capitalize">{microchip}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Raça:</h4>
          <h5 className="font-light capitalize">{raca}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Maturidade:</h4>
          <h5 className="font-light capitalize">{maturidade}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Sexo:</h4>
          <h5 className="font-light capitalize">{sexo}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Origem:</h4>
          <h5 className="font-light capitalize">{origem}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Porte:</h4>
          <h5 className="font-light capitalize">{porte}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Comportamento:</h4>
          <h5 className="font-light capitalize">{comportamento}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">espécie:</h4>
          <h5 className="font-light capitalize">{especie}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Doenças:</h4>
          <h5 className="font-light capitalize">{doencas.map( ( doenca ) => {
            return `${doenca}, `
          } )}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Status:</h4>
          <h5 className="font-light capitalize">{status}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Esse animal tem parentes?:</h4>
          <h5>{parentId ? "Sim" : "Não"}</h5>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link href={`/dashboard/animais/editar/${id}/${nome.toLowerCase()}/editar`} className="shrink-0 cursor-pointer w-full bg-gray-50 border border-gray-700 flex hover:bg-indigo-100 hover:border-indigo-400 transition-colors duration-100 items-center gap-2 justify-center font-medium text-neutral-700 hover:text-indigo-700 h-[50px] px-6 rounded-2xl">
          <PencilSimple size={20} />
          Editar
        </Link>
        <Link href={``} className="shrink-0 cursor-pointer w-full bg-gray-50 border border-gray-700 flex hover:bg-indigo-100 hover:border-indigo-400 transition-colors duration-100 items-center gap-2 justify-center font-medium text-neutral-700 hover:text-indigo-700 h-[50px] px-6 rounded-2xl">
          {/* <PencilSimple size={20} /> */}
          Declarar Óbito
        </Link>
        <button
          onClick={handleDeleteAnimal}
          className="shrink-0 cursor-pointer w-full bg-gray-50 border border-gray-700 flex hover:bg-indigo-100 hover:border-indigo-400 transition-colors duration-100 items-center gap-2 justify-center font-medium text-neutral-700 hover:text-indigo-700 h-[50px] px-6 rounded-2xl">
          {/* <PencilSimple size={20} /> */}
          Remover do Cadastro
        </button>
      </div>
    </div>
  );
}
