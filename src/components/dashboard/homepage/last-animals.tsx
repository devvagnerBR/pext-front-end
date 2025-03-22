import { ANIMAL_TYPE } from "@/types/animal";
import { formatDate } from "@/util/format-date";

interface LastAnimalsProps {
  animals: ANIMAL_TYPE[];
}





export function LastAnimals( { animals }: LastAnimalsProps ) {


  return (
    <div className="bg-indigo-50/60 flex-col  gap-8 rounded-2xl flex px-8 py-12 ">
      <h3 className="text-18 font-bold">Últimos animais registrados</h3>
      {animals && <div className="max-[1225px]:overflow-x-scroll ">
        {animals.map( ( animal: ANIMAL_TYPE, index: number ) => {
          return animal ? (
            <div key={animal.id} className="flex gap-20 border-b py-2 border-neutral-200 w-fit">
              <p className="py-2 shrink-0  max-w-[130px] min-w-[130px] truncate capitalize">{animal.nome}</p>
              <p className="py-2 shrink-0  max-w-[80px] min-w-[80px] truncate capitalize">{animal.especie}</p>
              <p className="py-2 shrink-0  max-w-[90px] min-w-[90px] truncate capitalize">{animal.maturidade}</p>
              <p className="py-2 shrink-0  max-w-[70px] min-w-[70px] truncate capitalize">{animal.sexo}</p>
              <p className="py-2 shrink-0  max-w-[90px] min-w-[90px] truncate capitalize">{animal.status}</p>
              <p className="py-2 shrink-0  max-w-[90px] min-w-[90px] truncate capitalize">{animal.porte}</p>
              <p className="py-2 shrink-0  max-w-[120px] min-w-[120px] truncate capitalize">{formatDate( animal.createdAt )}</p>
            </div>
          ) : null;
        } )}
      </div>}
    </div>
  );
}
