import { getAllAnimals } from "@/actions/get-all-animals";
import { Container } from "@/components/container";
import { AnimalsClientSide } from "./animals-client-side";
import { ANIMAL_DATA } from "@/types/animal";

export interface AnimaisPageProps { }

export default async function AnimaisPage() {

  const data = await getAllAnimals( "", 1 ) as ANIMAL_DATA


  return (
    <Container className="mt-16 pb-32 flex flex-col gap-4 max-lg:mt-2">
      <h1 className="text-20 font-semibold">Animais registrados</h1>
      <AnimalsClientSide
        animals={data} />
    </Container>
  );
}