'use server'

import { cookies } from "next/headers";

export async function setCookie( key: string, value: string ) {
  ( await cookies() ).set( key, value, {
    path: '/',
    secure: true,
    httpOnly: true,
    sameSite: 'lax'
  } );
}