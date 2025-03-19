import { FloppyDisk, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";
import { Card } from "./card";

interface ListaProps { }

export function Lista( props: ListaProps ) {


  const mockUpAnimals = [
    {
      id: 1,
      name: "Bolinha",
      microchip: "12345678912321",
      type: "Gato",
      breed: "Sem raça definida",
      status: "No abrigo",
      date: "12/09/2021"
    },
    {
      id: 2,
      name: "Rex",
      microchip: "98765432198765",
      type: "Cachorro",
      breed: "Labrador",
      status: "Adotado",
      date: "25/06/2020"
    },
    {
      id: 3,
      name: "Mimi",
      microchip: "56473829101234",
      type: "Gato",
      breed: "Persa",
      status: "No abrigo",
      date: "10/01/2022"
    },
    {
      id: 4,
      name: "Thor",
      microchip: "32178965412300",
      type: "Cachorro",
      breed: "Pitbull",
      status: "Em tratamento",
      date: "05/03/2023"
    },
    {
      id: 5,
      name: "Luna",
      microchip: "78945612365478",
      type: "Gato",
      breed: "Siamês",
      status: "Adotado",
      date: "18/07/2021"
    },
    {
      id: 6,
      name: "Toby",
      microchip: "65498732100012",
      type: "Cachorro",
      breed: "Beagle",
      status: "No abrigo",
      date: "30/11/2022"
    },
    {
      id: 7,
      name: "Mel",
      microchip: "74185296378900",
      type: "Gato",
      breed: "Angorá",
      status: "Adotado",
      date: "21/05/2020"
    },
    {
      id: 8,
      name: "Max",
      microchip: "15935748625836",
      type: "Cachorro",
      breed: "Pastor Alemão",
      status: "Em tratamento",
      date: "12/12/2021"
    },
    {
      id: 9,
      name: "Nina",
      microchip: "35795185245600",
      type: "Gato",
      breed: "Sem raça definida",
      status: "No abrigo",
      date: "27/09/2022"
    },
    {
      id: 10,
      name: "Bob",
      microchip: "95135725812369",
      type: "Cachorro",
      breed: "Poodle",
      status: "Adotado",
      date: "08/02/2023"
    },
    {
      id: 11,
      name: "Sofia",
      microchip: "12378965425896",
      type: "Gato",
      breed: "Maine Coon",
      status: "No abrigo",
      date: "14/04/2020"
    },
    {
      id: 12,
      name: "Fred",
      microchip: "85296314795136",
      type: "Cachorro",
      breed: "Bulldog",
      status: "Em tratamento",
      date: "22/08/2021"
    }
  ];

  return (
    <div className="  grid grid-cols-4 gap-2 max-[1280px]:grid-cols-3 max-[850px]:grid-cols-2 max-sm:grid-cols-1">

      {
        mockUpAnimals.map( ( animal ) => {
          return <Card key={animal.id} animal={animal} />
        } )
      }

    </div>
  );
}
