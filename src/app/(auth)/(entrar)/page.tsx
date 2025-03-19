'use client'

import { SignIn } from "@phosphor-icons/react";

export default function Home() {




  return (
    <div className="flex  h-dvh w-dvw">
      <div className="w-[480px] max-sm:p-4 max-2xl:w-full flex-col shrink-0 bg-indigo-50/70 h-full flex sm:items-center  sm:justify-center ">
        <div className="bg-white max-sm:h-full p-8 rounded-2xl gap-4 flex flex-col py-12">
          <div className="flex flex-col items-center gap-8">
            <img src="/assets/logo-petx.svg" alt="" />
            <h1 className="text-20">Faça o login</h1>
          </div>
          <form className="flex flex-col items-center gap-4">
            <input
              className="min-w-[260px] text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
              placeholder="Digite seu e-mail"
              type="text" />
            <input
              className="min-w-[260px] text-18 outline-none font-light border-gray-400 focus:ring-2 rounded-2xl ring-gray-400 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
              placeholder="Digite sua senha"
              type="text" />
            <button className="bg-indigo-500 flex hover:bg-indigo-700 transition-colors duration-200 items-center gap-2 justify-center font-medium text-indigo-50 h-[50px] min-w-[260px] rounded-2xl">
              <SignIn size={20} />
              Entrar
            </button>
            <a className="underline text-gray-500 text-12 underline-offset-2 decoration-gray-500 tracking-wider" href="">Esqueceu a senha?</a>
          </form>
        </div>
      </div>
      <div className="w-full items-center justify-center flex max-2xl:hidden">
        <img src="/assets/icon-cat.svg" alt="" />
      </div>
    </div>
  );
}
