import Link from "next/link";
import { Container } from "../container";

interface HeaderProps { }

export function Header( props: HeaderProps ) {
  return (
    <header className="bg-gray-900 h-[96px] flex items-center px-2">
      <Container className="flex items-center justify-between ">
        <img src="/assets/logo-petx-branco.svg" alt="logo pext" />


        <div className="space-x-8 max-md:hidden  *:text-gray-50 *:text-16 *:font-light">
          <Link href="/">Painel Principal</Link>
          <Link href="/dashboard">Animais</Link>
          <Link href="/dashboard">Estoque</Link>
          <Link href="/dashboard">Configurações</Link>
          <Link href="/dashboard">Sair</Link>
        </div>
      </Container>
    </header>
  );
}
