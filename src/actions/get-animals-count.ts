'use server'


import { ANIMAL_DATA, ANIMAL_TYPE } from "@/types/animal";
import { cookies } from "next/headers";
import { revalidateTagHook } from "./revalidate-tag";

export async function getAnimalsCount() {

  const cookieStore = cookies();
  const token = ( await cookieStore ).get( 'token' )?.value;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const reponse = await fetch( `${baseUrl}/animal/count`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    next: {
      tags: ['animals-count']
    },
    cache: "force-cache"

  } )


  const data = await reponse.json() as { gatos: number, cachorros: number, total: number }

  return data;


}
