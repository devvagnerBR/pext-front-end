'use server'

import { ANIMAL_DATA, ANIMAL_TYPE } from "@/types/animal";
import { cookies } from "next/headers";
import { revalidateTagHook } from "./revalidate-tag";

export async function getAllAnimals( query: string = '', page: number = 1 ) {

  const cookieStore = cookies();
  const token = ( await cookieStore ).get( 'token' )?.value;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const reponse = await fetch( `${baseUrl}/animal?p=${page}&q=${query}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    next: {
      tags: ['all-animals']
    },
    cache: "force-cache"

  } )


  const data = await reponse.json() as ANIMAL_DATA

  return data;


}
