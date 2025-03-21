'use client'

import { authenticate } from "@/actions/authenticate";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignIn } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { z } from "zod";


const authZodSchema = z.object( {
  email: z.string().email(),
  password: z.string().min( 3 ),
} )

type authZodData = z.infer<typeof authZodSchema>


export function EntrarForm() {

  const router = useRouter();

  const [errorMessage, setErrorMessagge] = useState( '' );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<authZodData>( { resolver: zodResolver( authZodSchema ) } );

  async function handleSignIn( data: authZodData ) {

    setErrorMessagge( '' );

    const submit = await authenticate( data ) as { message: string } | { token: string };

    if ( 'message' in submit ) {
      setErrorMessagge( submit.message );
    } else {
      await router.push( '/dashboard' );
    }


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
        className="min-w-[260px] text-14 tracking-widest outline-none font-light border-gray-400 focus:ring-2 rounded-2xl ring-gray-400 ring focus:ring-indigo-500 h-[50px] transition-all duration-75  pl-4"
        placeholder="Digite sua senha"
        type="password" />
      <button
        type="submit"
        className="max-[400px]:min-w-[280px] bg-indigo-500 flex cursor-pointer hover:bg-indigo-700 transition-colors duration-200 items-center gap-2 justify-center font-medium text-indigo-50 h-[50px] min-w-[260px]  rounded-2xl">
        <SignIn size={20} />
        Entrar
      </button>
      <p className={`  flex items-center text-14 text-red-400 tracking-wider`}>{errorMessage}</p>
      <a className="underline text-gray-500 text-12 underline-offset-2 decoration-gray-500 tracking-wider" href="">Esqueceu a senha?</a>
    </form>
  );
}
