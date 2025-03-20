'use server'


export async function authenticate( { email, password }: { email: string, password: string } ) {

  const response = await fetch( "https://petx-v4.onrender.com/api/auth/login",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( { email, password } )
    } );


  const data = await response.json();
  console.log( response );




}