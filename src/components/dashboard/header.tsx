import Link from "next/link";
import { Container } from "../container";
import { List } from "@phosphor-icons/react/dist/ssr";

interface HeaderProps { }

export function Header( props: HeaderProps ) {
  return (
    <header className="bg-gray-900 h-[96px] flex items-center px-2">
      <Container className="flex items-center justify-between px-4">
        <img src="/assets/logo-petx-branco.svg" alt="logo pext" />


        <List size={28} className="fill-gray-50 cursor-pointer md:hidden" />
        <div className="space-x-8 max-md:hidden  *:text-gray-50 *:text-16 *:font-light">
          <Link href="/dashboard">Painel Principal</Link>
          <Link href="/dashboard/animais">Animais</Link>
          {/* <Link href="/dashboard">Estoque</Link> */}
          {/* <Link href="/dashboard">Configurações</Link> */}
          <Link href="/dashboard">Sair</Link>
        </div>
      </Container>
    </header>
  );
}
