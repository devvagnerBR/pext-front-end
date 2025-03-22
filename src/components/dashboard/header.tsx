'use client'

import Link from "next/link";
import { Container } from "../container";
import { List } from "@phosphor-icons/react/dist/ssr";
import { logOut } from "@/actions/log-out";
import { useRouter } from "next/navigation";

interface HeaderProps { }

export function Header( props: HeaderProps ) {

  const router = useRouter();

  async function handleLogout() {
    await logOut();
    router.push( '/' );
  }

  return (
    <header className="bg-gray-900 h-[96px] flex items-center px-2">
      <Container className="flex items-center justify-between px-4">
        <Link href="/dashboard">
          <img src="/assets/logo-petx-branco.svg" alt="logo pext" />
        </Link>


        <List size={28} className="fill-gray-50 cursor-pointer md:hidden" />
        <div className="space-x-8 max-md:hidden  *:text-gray-50 *:text-16 *:font-light">
          <Link href="/dashboard">Painel Principal</Link>
          <Link href="/dashboard/animais">Animais</Link>
          <a
            className="cursor-pointer"
            onClick={handleLogout}
          >Sair</a>
        </div>
      </Container>
    </header>
  );
}
