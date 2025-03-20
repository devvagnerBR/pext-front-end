'use client'

import { authenticate } from "@/actions/authenticate";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignIn } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";


const authZodSchema = z.object( {
  email: z.string().email(),
  password: z.string().min( 3 ),
} )

type authZodData = z.infer<typeof authZodSchema>


export function EntrarForm() {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<authZodData>( { resolver: zodResolver( authZodSchema ) } );

  async function handleSignIn( data: authZodData ) {

    // const response = await fetch( "https://petx-v4.onrender.com/api/auth/login",
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify( { email: data.email, password: data.password } )
    //   } );

    // console.log( response );



    // reset();
  }



  return (
    <form
      onSubmit={handleSubmit( handleSignIn )}
      className="flex flex-col items-center gap-4">
      <input
        {...register( 'email' )}
        className="min-w-[260px] text-18 outline-none font-light border-gray-400 rounded-2xl ring-gray-400 focus:ring-2 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
        placeholder="Digite seu e-mail"
        type="text" />
      <input
        {...register( 'password' )}
        className="min-w-[260px] text-18 outline-none font-light border-gray-400 focus:ring-2 rounded-2xl ring-gray-400 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
        placeholder="Digite sua senha"
        type="text" />
      <button
        type="submit"
        className="max-[400px]:min-w-[280px] bg-indigo-500 flex cursor-pointer hover:bg-indigo-700 transition-colors duration-200 items-center gap-2 justify-center font-medium text-indigo-50 h-[50px] min-w-[260px]  rounded-2xl">
        <SignIn size={20} />
        Entrar
      </button>
      <a className="underline text-gray-500 text-12 underline-offset-2 decoration-gray-500 tracking-wider" href="">Esqueceu a senha?</a>
    </form>
  );
}
