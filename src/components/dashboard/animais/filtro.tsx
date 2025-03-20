'use client'

import { PaperPlaneTilt } from "@phosphor-icons/react";
import Link from "next/link";

interface FiltroProps { }

export function Filtro( props: FiltroProps ) {
  // todo fazer paginação dos animais

  return (
    <div className="flex justify-between flex-wrap gap-4 max-[461px]:gap-1 ">
      <form action="" className="flex gap-4 flex-wrap">
        <input
          className="min-w-[260px] max-[461px]:w-full text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
          placeholder="Pesquisar"
          type="text" />
        <button className="cursor-pointer bg-indigo-500 flex hover:bg-indigo-700 transition-colors duration-200 items-center gap-2 justify-center font-medium text-indigo-50 h-[50px] px-6 rounded-2xl">
          <PaperPlaneTilt size={20} />
          Pesquisar
        </button>
      </form>
      <Link href="animais/novo" className="cursor-pointer max-[670px]:mt-2 bg-indigo-500 flex hover:bg-indigo-700 transition-colors duration-200 items-center gap-2 justify-center font-medium text-indigo-50 h-[50px] px-6 rounded-2xl">
        <PaperPlaneTilt size={20} />
        Cadastrar novo
      </Link>
    </div>
  );
}
