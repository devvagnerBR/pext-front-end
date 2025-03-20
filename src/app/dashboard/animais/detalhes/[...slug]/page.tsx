import { Container } from "@/components/container";
import { Detalhes } from "@/components/dashboard/animais/detalhes/detalhes";

export interface DetalhesPageProps { params: { slug: string[] } }

export default async function DetalhesPage( { params }: DetalhesPageProps ) {


  const [id, name] = params.slug;

  // fazer a requisição para pegar os dados do animal pelo id;




  return (

    <Container className="mt-16 flex flex-col gap-4 max-lg:mt-2">
      <h1 className="text-20 font-semibold">Ficha do animal</h1>
      <Detalhes
        id={id}
        name={name}
      />


    </Container>
  );
}