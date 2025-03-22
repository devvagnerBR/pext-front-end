import { getAllAnimals } from "@/actions/get-all-animals";
import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod"

interface BuscaParentalProps {
  setParentalAnimals: ( animals: any ) => void;
  setSearchQueryHandler: ( query: string ) => void;

}

export function BuscaParental( { setSearchQueryHandler, setParentalAnimals }: BuscaParentalProps ) {

  const searchParentalZodSchema = z.object( {
    name: z.string(),
  } )

  type searchParentalData = z.infer<typeof searchParentalZodSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<searchParentalData>( { resolver: zodResolver( searchParentalZodSchema ) } );

  async function handleSearchParental( data: searchParentalData ) {
    const animals = await getAllAnimals( data.name );
    setSearchQueryHandler( data.name );
    setParentalAnimals( animals.data );
  }


  return (
    <div className="w-full flex flex-col gap-2 col-span-2">
      <div className="flex flex-col gap-4">
        <p className="font-semibold leading-3">Parentesco com outros animais</p>
        <p className="font-light text-14 leading-0.5 text-neutral-600">Busque o animal para relação:</p>
      </div>
      <form
        onSubmit={handleSubmit( handleSearchParental )}
        className="flex gap-4 w-full">
        <input
          {...register( 'name' )}
          className="mt-4 w-full text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
          type="text" />
        <button type="submit" className=" max-[420px]:w-full cursor-pointer w-fit mt-4 min-w-[164px]  justify-center max-[670px]:mt-2 bg-indigo-500 flex hover:bg-indigo-700 transition-colors duration-200 items-center gap-2 font-medium text-indigo-50 h-[50px] px-6 rounded-2xl">
          Buscar
        </button>
      </form>
    </div>
  );
}
