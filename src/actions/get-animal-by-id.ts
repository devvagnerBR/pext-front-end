'use server'

import { cookies } from "next/headers";

export async function getAnimalById( id: string ) {

  const cookieStore = cookies();
  const token = ( await cookieStore ).get( 'token' )?.value;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const reponse = await fetch( `${baseUrl}/animal/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    next: {
      tags: ['update-animal-by-id']
    },
    cache: "force-cache"

  } )

  const data = await reponse.json();
  return data;


}
