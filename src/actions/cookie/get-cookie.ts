'use server'

import { cookies } from "next/headers";


export async function getCookie( key: string ) {
  const cookie = ( await cookies() ).get( key )?.value;
  if ( !cookie ) return false;
  return cookie;
}