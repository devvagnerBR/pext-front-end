import { getAnimalsCount } from "@/actions/get-animals-count";
import { getTheLastRegisteredAnimals } from "@/actions/get-the-last-twelve";
import { Container } from "@/components/container";
import { CardAnimal } from "@/components/dashboard/homepage/card-animal";
import { LastAnimals } from "@/components/dashboard/homepage/last-animals";
import { ANIMAL_DATA, ANIMAL_TYPE } from "@/types/animal";
export interface DashboardPageProps { }

export default async function DashboardPage() {

  const lastAnimals = await getTheLastRegisteredAnimals() as ANIMAL_DATA;
  const animalsCount = await getAnimalsCount();

  function calculateFoodRemaining( count: number, foodQuantity: number ) {

    const kilosPerDay = 0.45;
    const foodPerDay = kilosPerDay * count;
    return foodQuantity / foodPerDay;
  }

  const dogsDaysRemaining = calculateFoodRemaining( animalsCount.cachorros, 240 );
  const catsDaysRemaining = calculateFoodRemaining( animalsCount.gatos, 182 );


  return (
    <Container className="mt-16  flex flex-col gap-4 p-2 max-lg:mt-2">
      <div className=" w-full grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <CardAnimal
          src="/assets/icon-dog.svg"
          cardTitle="Cachorros"
          animalQuantity={animalsCount.cachorros}
          foodQuantity={240}
          daysRemaining={Math.floor( dogsDaysRemaining )}
          color="green" />
        <CardAnimal
          src="/assets/icon-cat-red.svg"
          animalQuantity={animalsCount.gatos}
          cardTitle="Gatos"
          foodQuantity={182}
          daysRemaining={Math.floor( catsDaysRemaining )}
          color="red" />
      </div>
      <LastAnimals animals={lastAnimals.data} />
    </Container>
  );
}