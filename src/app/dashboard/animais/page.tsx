import { Container } from "@/components/container";
import { Filtro } from "@/components/dashboard/animais/filtro";
import { Lista } from "@/components/dashboard/animais/lista";

export interface AnimaisPageProps { }

export default async function AnimaisPage() {




  return (
    <Container className="mt-16 flex flex-col gap-4 max-lg:mt-2">
      <h1 className="text-20 font-semibold">Animais registrados</h1>
      <Filtro />
      <Lista />
    </Container>
  );
}