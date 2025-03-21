
'use client'

import Link from "next/link";

interface CadastroFormProps { }

export function CadastroForm( props: CadastroFormProps ) {
  return (
    <form>

      <div className="bg-gray-100/70 max-sm:mt-4 rounded-2xl p-16 max-md:p-4 grid grid-cols-2  gap-8 max-md:gap-4 max-md:grid-cols-1">
        <div className=" flex flex-col gap-4">
          <label htmlFor="" className="flex flex-col gap-2 font-semibold">
            Nome do animal:
            <input
              className="bg-neutral-50 text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
              placeholder="Digite seu e-mail"
              type="text" />
          </label>
          <div className="flex gap-4 w-full justify-between flex-wrap">
            <label htmlFor="" className="flex max-[1250px]:w-full flex-col gap-2 font-semibold">
              Código do microchip:
              <input
                className=" text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
                placeholder="Digite seu e-mail"
                type="text" />
            </label>
            <label htmlFor="" className="flex  max-[1250px]:w-full flex-col gap-2 font-semibold">
              Maturidade:
              <input
                className=" text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75 pl-4"
                placeholder="Digite seu e-mail"
                type="text" />
            </label>
          </div>
          <label htmlFor="" className="flex flex-col gap-2 font-semibold">
            Raça:
            <input
              className=" text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
              placeholder="Digite seu e-mail"
              type="text" />
          </label>
          <label htmlFor="" className="flex flex-col gap-2 font-semibold">
            Sexo:
            <select
              className=" text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4">
              <option value="Macho">Macho</option>
              <option value="Fêmea">Fêmea</option>
            </select>
          </label>
        </div>
        <div className=" flex flex-col gap-4">
          <label htmlFor="" className="flex flex-col gap-2 font-semibold">
            Origem:
            <input
              className=" text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
              placeholder="Digite seu e-mail"
              type="text" />
          </label>
          <label htmlFor="" className="flex flex-col gap-2 font-semibold">
            Porte
            <input
              className=" text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
              placeholder="Digite seu e-mail"
              type="text" />
          </label>
          <label htmlFor="" className="flex flex-col gap-2 font-semibold">
            Comportamento
            <input
              className=" text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
              placeholder="Digite seu e-mail"
              type="text" />
          </label>
          <label htmlFor="" className="flex flex-col gap-2 font-semibold">
            Espécie:
            <select
              className=" text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4">
              <option value="Cachorro">Cachorro</option>
              <option value="Gato">Gato</option>
            </select>
          </label>
          <label htmlFor="" className="flex flex-col gap-2 font-semibold">
            Doenças:
            <input
              className=" text-18 bg-neutral-50 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
              placeholder="Digite seu e-mail"
              type="text" />
          </label>
        </div>
      </div>
      <div className="w-full flex items-end justify-end ">
        <button type="submit" className=" max-[420px]:w-full cursor-pointer w-fit mt-4 min-w-[164px]  justify-center max-[670px]:mt-2 bg-indigo-500 flex hover:bg-indigo-700 transition-colors duration-200 items-center gap-2 font-medium text-indigo-50 h-[50px] px-6 rounded-2xl">
          Cadastrar
        </button>
      </div>
    </form>
  );
}
