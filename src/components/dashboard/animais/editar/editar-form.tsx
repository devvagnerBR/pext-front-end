'use client'

import { ANIMAL_TYPE } from "@/types/animal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { revalidateTagHook } from "@/actions/revalidate-tag";
import { updateAnimal } from "@/actions/update-animal";
import { useRouter } from "next/navigation";

interface EditarFormProps {
  animal: ANIMAL_TYPE;
}

export function EditarForm( { animal }: EditarFormProps ) {

  const router = useRouter();

  const editAnimalZodSchema = z.object( {
    nome: z.string(),
    maturidade: z.string().optional(),
    microchip: z.string().optional(),
    raca: z.string().optional(),
    sexo: z.string().optional(),
    origem: z.string().optional(),
    porte: z.string().optional(),
    comportamento: z.string().optional(),
    especie: z.string().optional(),
    doencas: z.string().optional(),
  } );

  type editAnimalData = z.infer<typeof editAnimalZodSchema>;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<editAnimalData>( { resolver: zodResolver( editAnimalZodSchema ) } );

  useEffect( () => {

    setValue( 'nome', animal.nome );
    setValue( 'maturidade', animal.maturidade );
    setValue( 'microchip', animal.microchip );
    setValue( 'raca', animal.raca );
    setValue( 'sexo', animal.sexo );
    setValue( 'origem', animal.origem );
    setValue( 'porte', animal.porte );
    setValue( 'comportamento', animal.comportamento );
    setValue( 'especie', animal.especie );
    setValue( 'doencas', animal.doencas ? animal.doencas.join( ', ' ) : '' );
  }, [animal, setValue] );

  async function handleEditAnimal( data: editAnimalData ) {

    try {

      const doencasAsArray = data.doencas ? data.doencas.split( ',' ).map( doenca => doenca.trim() ) : [];
      const editedAnimal = { ...data, doencas: doencasAsArray, id: animal.id };

      await updateAnimal( {
        form: editedAnimal,
        animalId: animal.id
      } );

      await revalidateTagHook( 'all-animals' );
      await revalidateTagHook( 'update-last-animals' );
      await revalidateTagHook( 'update-animal-by-id' );

      await router.push( '/dashboard/animais' );



    } catch ( error ) {
      console.log( error );
    }
  }


  console.log( errors )


  return (
    <form onSubmit={handleSubmit( handleEditAnimal )}>
      <div className="bg-gray-100/70 max-sm:mt-4 rounded-2xl p-16 max-md:p-4 grid grid-cols-2 gap-8 max-md:gap-4 max-md:grid-cols-1">
        <div className="flex flex-col gap-4 ">
          <label htmlFor="nome" className="flex flex-col gap-2 font-semibold">
            Nome do animal
            <input
              {...register( 'nome' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
              placeholder="Digite o nome do animal"
              type="text"
            />
          </label>
          <label htmlFor="maturidade" className="flex flex-col gap-2 font-semibold">
            Maturidade
            <input
              {...register( 'maturidade' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
              placeholder="Digite a maturidade"
              type="text"
            />
          </label>
          <label htmlFor="microchip" className="flex flex-col gap-2 font-semibold">
            Código do microchip
            <input
              {...register( 'microchip' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
              placeholder="Digite o código do microchip"
              type="text"
            />
          </label>
          <label htmlFor="raca" className="flex flex-col gap-2 font-semibold">
            Raça
            <input
              {...register( 'raca' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
              placeholder="Digite a raça"
              type="text"
            />
          </label>

          <label htmlFor="sexo" className="flex flex-col gap-2 font-semibold">
            Sexo
            <select
              {...register( 'sexo' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
            >
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </label>
        </div>
        <div className="flex flex-col gap-4 ">
          <label htmlFor="origem" className="flex flex-col gap-2 font-semibold">
            Origem
            <input
              {...register( 'origem' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
              placeholder="Digite a origem"
              type="text"
            />
          </label>
          <label htmlFor="porte" className="flex flex-col gap-2 font-semibold">
            Porte
            <select
              {...register( 'porte' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
            >
              <option value="Pequeno">Pequeno</option>
              <option value="Médio">Médio</option>
              <option value="Grande">Grande</option>
            </select>
          </label>
          <label htmlFor="comportamento" className="flex flex-col gap-2 font-semibold">
            Comportamento
            <input
              {...register( 'comportamento' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
              placeholder="Digite o comportamento"
              type="text"
            />
          </label>
          <label htmlFor="especie" className="flex flex-col gap-2 font-semibold">
            Espécie
            <select
              {...register( 'especie' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4">
              <option value="cachorro">Cachorro</option>
              <option value="gato">Gato</option>
            </select>
          </label>
          <label htmlFor="doencas" className="flex flex-col gap-2 font-semibold">
            Doenças
            <input
              {...register( 'doencas' )}
              className="text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
              placeholder="Digite as doenças"
              type="text"
            />
          </label>
        </div>
      </div>
      <div className="w-full flex items-end justify-end">
        <button type="submit" className="max-[420px]:w-full cursor-pointer w-fit mt-4 min-w-[164px] justify-center max-[670px]:mt-2 bg-indigo-500 flex hover:bg-indigo-700 transition-colors duration-200 items-center gap-2 font-medium text-indigo-50 h-[50px] px-6 rounded-2xl">
          Salvar Alterações
        </button>
      </div>
    </form>
  );
}