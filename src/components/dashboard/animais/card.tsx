import { ANIMAL_TYPE } from "@/types/animal";
import { formatDate } from "@/util/format-date";
import { FloppyDisk } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface CardProps {
  animal: ANIMAL_TYPE
}

export function Card( { animal }: CardProps ) {

  const { id, nome, microchip, especie, raca, createdAt } = animal;

  return (
    <div className="p-8 max-[1280px]:p-4 rounded-2xl bg-gray-100/70 border border-transparent hover:border-indigo-400 transition-all duration-100">
      <div className="border-b pb-4 border-gray-300">
        <h5 className="text-20 font-semibold capitalize truncate ">{nome}</h5>
        <p className="text-16  font-normal">Microchip: {microchip}</p>
      </div>
      <div className="border-b py-4 border-gray-300 flex justify-between items-center">
        <div className="flex gap-2">
          <img src={especie.toLowerCase() === "gato" ? "/assets/icon-cat-red.svg" : "/assets/icon-dog.svg"} className="w-6" alt="" />
          <p className=" text-16    w-fit rounded-xl text-neutral-700 capitalize">{especie}</p>
        </div>
        <p className=" text-16">{raca}</p>
      </div>

      <div className="py-2 mt-2 flex justify-between items-center">
        <p className="italic text-14 bg-orange-100 py-1 px-4 w-fit rounded-xl text-neutral-700">No abrigo</p>
        <p className=" text-14">{formatDate( createdAt )}</p>
      </div>

      <Link href={`/dashboard/animais/detalhes/${id}/${nome.toLowerCase()}`} className="mt-8 cursor-pointer w-full bg-gray-50 border border-gray-700 flex hover:bg-indigo-100 hover:border-indigo-400 transition-colors duration-100 items-center gap-2 justify-center font-medium text-neutral-700 hover:text-indigo-700 h-[50px] px-6 rounded-2xl">
        <FloppyDisk size={20} />
        Ver
      </Link>
    </div>
  );
}
