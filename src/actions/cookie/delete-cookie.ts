'use server'

import { cookies } from "next/headers";

export async function deleteCookie( key: string ) {
  ( await cookies() ).delete( key );
}