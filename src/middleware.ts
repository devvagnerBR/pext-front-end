import { NextRequest, NextResponse } from "next/server";
import { validateToken } from "./util/verify-token";

export async function middleware( req: NextRequest ) {

  const token = req.cookies.get( 'token' )?.value;


  // se token existir e tentar acessar a página de login, redireciona para a o /dashboard;
  if ( token && req.nextUrl.pathname === '/' ) {
    return NextResponse.redirect( new URL( "/dashboard", req.url ) )
  }

  // se token não existir e tentar acessar páginas protegidas, redireciona para a página de login
  if ( !token && req.nextUrl.pathname.startsWith( '/dashboard' ) ) {
    return NextResponse.redirect( new URL( "/", req.url ) )
  }

  return NextResponse.next();
}