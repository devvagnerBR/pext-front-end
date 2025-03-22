'use server'


import { cookies } from "next/headers";

interface CadastroFormProps {
  nome: string;
  microchip: string;
  maturidade: string;
  raca: string;
  sexo: string;
  origem: string;
  porte: string;
  comportamento: string;
  especie: string;
  doencas?: string;
  parentId?: string;
}

export async function registerNewAnimal( inputForm: CadastroFormProps ) {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const cookieStore = cookies();
  const token = ( await cookieStore ).get( 'token' )?.value;

  const response = await fetch( `${baseUrl}/animal/register`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        nome: inputForm.nome,
        maturidade: inputForm.maturidade,
        microchip: inputForm.microchip,
        raca: inputForm.raca,
        sexo: inputForm.sexo,
        origem: inputForm.origem,
        porte: inputForm.porte,
        comportamento: inputForm.comportamento,
        especie: inputForm.especie,
        doencas: [inputForm.doencas],
        parentId: inputForm.parentId,
        status: "no abrigo"
      } )
    } );

  if ( !response.ok ) {
    return false
  }

  return true





}