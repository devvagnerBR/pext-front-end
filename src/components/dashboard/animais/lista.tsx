import { FloppyDisk, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import { Card } from "./card";
import { ANIMAL_DATA, ANIMAL_TYPE } from "@/types/animal";

interface ListaProps {
  animals: ANIMAL_DATA;
}

export function Lista( { animals }: ListaProps ) {

  return (
    <div className="  grid grid-cols-4 gap-2 max-[1280px]:grid-cols-3 max-[850px]:grid-cols-2 max-sm:grid-cols-1">

      {
        animals.data.map( ( animal ) => {
          return <Card key={animal.id} animal={animal} />
        } )
      }

    </div>
  );
}
