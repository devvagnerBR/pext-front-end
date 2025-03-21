'use server';

import { setCookie } from "./cookie/set-cookie";

export async function authenticate( { email, password }: { email: string, password: string } ) {


  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const response = await fetch( `${baseUrl}/user/authenticate`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( { email, password } )
    } );


  if ( !response.ok ) {
    const data = await response.json();

    return { message: data.message }
  }

  const data = await response.json() as { token: string } as { token: string };
  const token = data.token;

  await setCookie( 'token', token );
  return data

}