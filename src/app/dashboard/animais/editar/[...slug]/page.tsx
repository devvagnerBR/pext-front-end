import { getAnimalById } from "@/actions/get-animal-by-id";
import { Container } from "@/components/container";
import { EditarForm } from "@/components/dashboard/animais/editar/editar-form";

export interface DetalhesPageProps {
  params: Promise<{ slug: string[] }>
}

export default async function EditarPage( { params }: DetalhesPageProps ) {

  const { slug } = await params;
  const [id, name] = slug;

  const animal = await getAnimalById( id );

  return (

    <Container className="mt-16 flex flex-col gap-4 max-lg:mt-4 max-md:pb-16">
      <div className="flex  justify-between items-start flex-wrap max-sm:justify-center gap-4 max-[428]:gap-2">
        <h1 className="text-20 font-semibold">Editar animal</h1>
      </div>
      <EditarForm animal={animal} />
    </Container>
  );
}