'use server'

import { cookies } from "next/headers";

export async function getTheLastRegisteredAnimals( query: string = '', page: number = 1 ) {

  const cookieStore = cookies();
  const token = ( await cookieStore ).get( 'token' )?.value;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const reponse = await fetch( `${baseUrl}/animal?p=${page}&q=${query}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    next: {
      tags: ['update-last-animals']
    },
    cache: "force-cache"

  } )

  const data = await reponse.json();
  return data;


}
