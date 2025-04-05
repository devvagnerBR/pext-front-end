'use client'

import { EntrarForm } from "@/components/entrar/entrar-form";
import { SignIn } from "@phosphor-icons/react";
import { Pwa } from "./pwa";

export default function Home() {




  return (
    <div className="flex  h-dvh w-dvw">
      <div className="w-[480px] max-sm:p-4 max-2xl:w-full flex-col shrink-0 bg-indigo-50/70 h-full flex sm:items-center  sm:justify-center ">
        <div className="bg-white max-sm:h-full p-8 rounded-2xl gap-4 flex flex-col py-12">
          <div className="flex flex-col items-center gap-8">
            <img src="/assets/logo-petx.svg" alt="" />
            <h1 className="text-20">Faça o login</h1>
          </div>
          <EntrarForm />
          <Pwa />
        </div>
      </div>
      <div className="w-full items-center justify-center flex max-2xl:hidden">
        <img src="/assets/icon-cat.svg" alt="" />
      </div>
    </div>
  );
}
