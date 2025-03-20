import { Container } from "@/components/container";
import { Detalhes } from "@/components/dashboard/animais/detalhes/detalhes";
import { EditarForm } from "@/components/dashboard/animais/editar/editar-form";
import { CadastroForm } from "@/components/dashboard/animais/novo/cadastro-form";

export interface DetalhesPageProps { params: { slug: string[] } }

export default async function EditarPage( { params }: DetalhesPageProps ) {


  const [id, name] = params.slug;

  // fazer a requisição para pegar os dados do animal pelo id;




  return (

    <Container className="mt-16 flex flex-col gap-4 max-lg:mt-4">
      <div className="flex  justify-between items-start flex-wrap max-sm:justify-center gap-4 max-[428]:gap-2">
        <h1 className="text-20 font-semibold">Editar animal</h1>
        <button className=" w-fit  cursor-pointer  bg-gray-50 border border-gray-700 flex hover:bg-indigo-100 hover:border-indigo-400 transition-colors duration-100 items-center gap-2 justify-center font-medium text-neutral-700 hover:text-indigo-700 h-[50px] px-6 rounded-2xl">
          Button Primary
        </button>
      </div>
      <EditarForm />
    </Container>
  );
}