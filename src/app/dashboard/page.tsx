import { getTheLastRegisteredAnimals } from "@/actions/get-the-last-twelve";
import { Container } from "@/components/container";
import { CardAnimal } from "@/components/dashboard/homepage/card-animal";
import { LastAnimals } from "@/components/dashboard/homepage/last-animals";
import { ANIMAL_TYPE } from "@/types/animal";
export interface DashboardPageProps { }

export default async function DashboardPage() {

  const lastAnimals = await getTheLastRegisteredAnimals() as ANIMAL_TYPE[];

  const dogsCount = lastAnimals.filter( animal => animal.especie === "cachorro" );
  const catsCount = lastAnimals.filter( animal => animal.especie === "gato" );

  function calculateFoodRemaining( animals: ANIMAL_TYPE[], foodQuantity: number ) {

    const kilosPerDay = 0.45;

    const foodPerDay = animals.reduce( ( total, animal ) => {
      return total + kilosPerDay;
    }, 0 );

    return foodQuantity / foodPerDay;
  }

  const dogsDaysRemaining = calculateFoodRemaining( dogsCount, 100 );
  const catsDaysRemaining = calculateFoodRemaining( catsCount, 100 );


  return (
    <Container className="mt-16  flex flex-col gap-4 p-2 max-lg:mt-2">
      <div className=" w-full grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <CardAnimal
          src="/assets/icon-dog.svg"
          cardTitle="Cachorros"
          animalQuantity={dogsCount.length}
          foodQuantity={100}
          daysRemaining={Math.floor( dogsDaysRemaining )}
          color="green" />
        <CardAnimal
          src="/assets/icon-cat-red.svg"
          animalQuantity={catsCount.length}
          cardTitle="Gatos"
          foodQuantity={100}
          daysRemaining={Math.floor( catsDaysRemaining )}
          color="red" />
      </div>
      <LastAnimals animals={lastAnimals} />
    </Container>
  );
}