import { Container } from "@/components/container";
import { CadastroForm } from "@/components/dashboard/animais/novo/cadastro-form";


export interface NovoPageProps { }

export default async function NovoPage() {


  return (

    <Container className="mt-16 flex flex-col gap-4 max-lg:mt-4 pb-32">
      <div className="flex  justify-between items-start flex-wrap max-sm:justify-center gap-4 max-[428]:gap-2">
        <h1 className="text-20 font-semibold">Cadastrar novo animal</h1>
        {/* <button className=" w-fit  cursor-pointer  bg-gray-50 border border-gray-700 flex hover:bg-indigo-100 hover:border-indigo-400 transition-colors duration-100 items-center gap-2 justify-center font-medium text-neutral-700 hover:text-indigo-700 h-[50px] px-6 rounded-2xl">
          Button Primary
        </button> */}
      </div>
      <CadastroForm />
    </Container>
  );
}