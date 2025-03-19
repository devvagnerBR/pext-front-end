import { Header } from "@/components/dashboard/header";


export default async function DashBoardLayout( { children, }: Readonly<{ children: React.ReactNode; }> ) {



  return (
    <div className="">
      <Header />
      {children}
    </div>

  );
}
