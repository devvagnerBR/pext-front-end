import { ANIMAL_TYPE } from "@/types/animal";
import { formatDate } from "@/util/format-date";

interface LastAnimalsProps {
  animals: ANIMAL_TYPE[];
}





export function LastAnimals( { animals }: LastAnimalsProps ) {


  return (
    <div className="bg-indigo-50/60 flex-col  gap-8 rounded-2xl flex px-8 py-12 ">
      <h3 className="text-18 font-bold">Últimos animais registrados</h3>
      <div className="overflow-x-scroll ">
        {animals.map( ( animal: ANIMAL_TYPE, index: number ) => {
          return animal ? (
            <div key={animal.id} className="flex gap-20 border-b py-2 border-neutral-200 w-fit">
              <p className="py-2 shrink-0  max-w-[150px] min-w-[150px] truncate capitalize">{animal.nome}</p>
              <p className="py-2 shrink-0  max-w-[80px] min-w-[80px] truncate capitalize">{animal.especie}</p>
              <p className="py-2 shrink-0  max-w-[90px] min-w-[90px] truncate capitalize">{animal.maturidade}</p>
              <p className="py-2 shrink-0  max-w-[70px] min-w-[70px] truncate capitalize">{animal.sexo}</p>
              <p className="py-2 shrink-0  max-w-[90px] min-w-[90px] truncate capitalize">{animal.status}</p>
              <p className="py-2 shrink-0  max-w-[90px] min-w-[90px] truncate capitalize">{animal.porte}</p>
              <p className="py-2 shrink-0  max-w-[120px] min-w-[120px] truncate capitalize">{formatDate( animal.createdAt )}</p>
            </div>
          ) : null;
        } )}
      </div>
    </div>
  );
}


// export function LastAnimals( { animals }: LastAnimalsProps ) {

//   return (
//     <div className="bg-indigo-50/60 flex-col col-span-2 gap-8 rounded-2xl flex px-8 py-12 ">
//       <h3 className="text-18 font-bold">Últimos animais registrados</h3>
//       <div className=" gap-16 columns-2 max-[980px]:columns-1 max-[1240px]:gap-8 overflow-x-scroll">
//         {animals.map( ( animal: ANIMAL_TYPE, index: number ) => {
//           return animal ? (
//             <div key={animal.id} className="flex gap-16 max-[1240px]:gap-8 border-b border-gray-200 py-2 max-[980px]:gap-28 max-sm:gap-10">
//               <p className="py-2 shrink-0 min-w-[80px]">{animal.nome}</p>
//               <p className="py-2 shrink-0">{animal.especie}</p>
//               <p className="py-2 shrink-0">{animal.maturidade}</p>
//               <p className="py-2 shrink-0">{formatDate( animal.createdAt )}</p>
//               <p className="py-2 shrink-0">{formatDate( animal.createdAt )}</p>
//               <p className="py-2 shrink-0">{formatDate( animal.createdAt )}</p>
//               <p className="py-2 shrink-0">{formatDate( animal.createdAt )}</p>
//               <p className="py-2 shrink-0">{formatDate( animal.createdAt )}</p>
//               <p className="py-2 shrink-0">{formatDate( animal.createdAt )}</p>
//             </div>
//           ) : null;
//         } )}
//       </div>
//     </div>
//   );
// }
