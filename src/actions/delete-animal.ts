'use server'

import { cookies } from "next/headers";

export async function deleteAnimal( id: string ) {

  const cookieStore = cookies();
  const token = ( await cookieStore ).get( 'token' )?.value;


  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch( `${baseUrl}/animal/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  } )

  if ( !response.ok ) return false
  return true



}
