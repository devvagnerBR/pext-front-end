import { FloppyDisk, PencilSimple } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

interface DetalhesProps {
  id: string;
  name: string;
}

export function Detalhes( { id, name }: DetalhesProps ) {



  return (
    <div className=" max-[1280px]:p-4 w-fit gap-8 flex  " >
      <div className="bg-gray-100/70 rounded-2xl p-8 flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Nome:</h4>
          <h5 className="font-light capitalize">{name}</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Id do Chip:</h4>
          <h5 className="font-light">1232132 13123 12321312</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Raça:</h4>
          <h5 className="font-light">Poodle</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Maturidade:</h4>
          <h5 className="font-light">IDOSO</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Sexo:</h4>
          <h5 className="font-light">FEMEA</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Origem:</h4>
          <h5 className="font-light">RESGATE</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Porte:</h4>
          <h5 className="font-light">PEQUENO</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Comportamento:</h4>
          <h5 className="font-light">DOCIL</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">espécie:</h4>
          <h5 className="font-light">CACHORRO</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Doenças:</h4>
          <h5 className="font-light">Frids</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">Status:</h4>
          <h5 className="font-light">CINOMOSE, raiva</h5>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="font-semibold text-18">lsAnimaisConjunto:</h4>
          <h5>que é um array</h5>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Link href={`/dashboard/animais/editar/${id}/${name.toLowerCase()}/editar`} className=" cursor-pointer w-full bg-gray-50 border border-gray-700 flex hover:bg-indigo-100 hover:border-indigo-400 transition-colors duration-100 items-center gap-2 justify-center font-medium text-neutral-700 hover:text-indigo-700 h-[50px] px-6 rounded-2xl">
          <PencilSimple size={20} />
          Editar
        </Link>
        <Link href={``} className=" cursor-pointer w-full bg-gray-50 border border-gray-700 flex hover:bg-indigo-100 hover:border-indigo-400 transition-colors duration-100 items-center gap-2 justify-center font-medium text-neutral-700 hover:text-indigo-700 h-[50px] px-6 rounded-2xl">
          {/* <PencilSimple size={20} /> */}
          Declarar Óbito
        </Link>
        <Link href={``} className=" cursor-pointer w-full bg-gray-50 border border-gray-700 flex hover:bg-indigo-100 hover:border-indigo-400 transition-colors duration-100 items-center gap-2 justify-center font-medium text-neutral-700 hover:text-indigo-700 h-[50px] px-6 rounded-2xl">
          {/* <PencilSimple size={20} /> */}
          Remover do Cadastro
        </Link>
      </div>
    </div>
  );
}
