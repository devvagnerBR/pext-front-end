import { Container } from "@/components/container";
import { CardAnimal } from "@/components/dashboard/homepage/card-animal";
import { LastAnimals } from "@/components/dashboard/homepage/last-animals";
export interface DashboardPageProps { }

export default async function DashboardPage() {


  return (
    <Container className="mt-16  flex flex-col gap-4 p-2 max-lg:mt-2">
      <div className=" w-full grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <CardAnimal
          src="/assets/icon-dog.svg"
          cardTitle="Cachorros"
          animalQuantity={212}
          foodQuantity={298}
          daysRemaining={12}
          color="green" />
        <CardAnimal
          src="/assets/icon-cat-red.svg"
          animalQuantity={212}
          cardTitle="Gatos"
          foodQuantity={298}
          daysRemaining={12}
          color="red" />
      </div>
      <LastAnimals />
    </Container>
  );
}