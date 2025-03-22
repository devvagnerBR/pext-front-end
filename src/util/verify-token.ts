import { jwtVerify } from "jose";

export async function validateToken( token: string ) {
  try {
    const secret = new TextEncoder().encode( process.env.NEXT_PUBLIC_JWT_SECRET );
    const { payload } = await jwtVerify( token, secret );

    return { valid: true, payload };
  } catch ( error: any ) {
    console.error( "Erro ao validar token:", error );
    return { valid: false, error: error.message };
  }
}
