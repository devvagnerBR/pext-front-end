'use server'

import { cookies } from "next/headers";


interface UpdateFormProps {
  form: {
    nome?: string;
    microchip?: string;
    maturidade?: string;
    raca?: string;
    sexo?: string;
    origem?: string;
    porte?: string;
    comportamento?: string;
    especie?: string;
    doencas?: string[];
  },
  animalId: string;

}


export async function updateAnimal( { form, animalId }: UpdateFormProps ) {

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const cookieStore = cookies();
  const token = ( await cookieStore ).get( 'token' )?.value;


  const response = await fetch( `${baseUrl}/animal/${animalId}`,
    {
      method: 'PUT',
      headers
        : {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        nome: form.nome,
        maturidade: form.maturidade,
        microchip: form.microchip,
        raca: form.raca,
        sexo: form.sexo,
        origem: form.origem,
        porte: form.porte,
        comportamento: form.comportamento,
        especie: form.especie,
        doencas: form.doencas,
      } )
    } );

  const data = await response.json()
  console.log( data )

}