'use client'


import { z } from "zod";
import { BuscaParental } from "./busca-parental";
import { ListaParental } from "./lista-parental";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { ANIMAL_DATA, ANIMAL_TYPE } from "@/types/animal";
import { registerNewAnimal } from "@/actions/register-new-animal";
import { revalidateTagHook } from "@/actions/revalidate-tag";
import { useRouter } from "next/navigation";


interface CadastroFormProps { }

export function CadastroForm( props: CadastroFormProps ) {

  const router = useRouter();

  const [parentalAnimals, setParentalAnimals] = useState( [] as ANIMAL_TYPE[] );
  const [searchQuery, setSearchQuery] = useState( '' );

  const registerNewAnimalSchema = z.object( {
    nome: z.string(),
    maturidade: z.string(),
    microchip: z.string(),
    raca: z.string(),
    sexo: z.string(),
    origem: z.string(),
    porte: z.string(),
    comportamento: z.string(),
    especie: z.string(),
    doencas: z.string().optional(),
    parentId: z.string().optional()
  } )

  type registerNewAnimalData = z.infer<typeof registerNewAnimalSchema>

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<registerNewAnimalData>( { resolver: zodResolver( registerNewAnimalSchema ) } );

  async function handleRegisterNewAnimal( data: registerNewAnimalData ) {

    try {

      const response = await registerNewAnimal( data );
      if ( response ) {
        console.log( 'Animal cadastrado com sucesso!' );
        await revalidateTagHook( 'update-last-animals' );
        await revalidateTagHook( 'all-animals' );
        await revalidateTagHook( 'animals-count' );
        reset();
        router.push( '/dashboard/animais' );
      }

    } catch ( error ) {
      console.error( error );
    }


  }

  async function setSearchQueryHandler( query: string ) {
    setSearchQuery( query );
  }

  const inputData = [
    {
      label: 'Nome do animal:',
      name: 'nome',
      type: 'text'
    },
    {
      label: 'Código do microchip:',
      name: 'microchip',
      type: 'text'
    },
    {
      label: 'Maturidade:',
      name: 'maturidade',
      type: 'text'
    },
    {
      label: 'Raça:',
      name: 'raca',
      type: 'text'
    },
    {
      label: 'Sexo:',
      name: 'sexo',
      type: 'select',
      options: ['Macho', 'Fêmea']
    },
    {
      label: 'Origem:',
      name: 'origem',
      type: 'text'
    },
    {
      label: 'Porte:',
      name: 'porte',
      type: 'select',
      options: ['Pequeno', 'Médio', 'Grande']
    },
    {
      label: 'Comportamento:',
      name: 'comportamento',
      type: 'text'
    },
    {
      label: 'Espécie:',
      name: 'especie',
      type: 'select',
      options: ['Cachorro', 'Gato']
    },
    {
      label: 'Doenças:',
      name: 'doencas',
      type: 'text'
    },
  ]


  return (
    <div>
      <form
        onSubmit={handleSubmit( handleRegisterNewAnimal )}
        className="bg-gray-100/70 max-sm:mt-4 rounded-2xl p-16 max-md:p-4 grid grid-cols-2  gap-8 max-md:gap-4 max-md:grid-cols-1">
        {inputData.map( ( input, index ) => (
          <div key={index} className="flex flex-col gap-4">
            <p className="font-semibold leading-3">{input.label}</p>
            {input.type === 'text' ? (
              <input
                {...register( input.name as keyof registerNewAnimalData )}
                className="mt-4 w-full text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
                type="text" />
            ) : (
              <select
                {...register( input.name as keyof registerNewAnimalData )}
                className="mt-4 w-full text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4">
                {input.options?.map( ( option, index ) => (
                  <option key={index} value={option}>{option}</option>
                ) )}
              </select>
            )}
          </div>
        ) )}
      </form>

      <div className="p-4 bg-gray-100/70 rounded-2xl mt-4 flex flex-col gap-4">
        <BuscaParental
          setParentalAnimals={setParentalAnimals}
          setSearchQueryHandler={setSearchQueryHandler}
        />
        {parentalAnimals &&
          <ListaParental
            searchQuery={searchQuery}
            register={register}
            animals={parentalAnimals} />}
      </div>

      <div className="w-full flex items-end justify-end pr-4 ">
        <button
          onClick={handleSubmit( handleRegisterNewAnimal )}
          type="submit" className=" max-[420px]:w-full cursor-pointer w-fit mt-4 min-w-[164px]  justify-center max-[670px]:mt-2 bg-indigo-500 flex hover:bg-indigo-700 transition-colors duration-200 items-center gap-2 font-medium text-indigo-50 h-[50px] px-6 rounded-2xl">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
