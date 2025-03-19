import { twMerge } from "tailwind-merge";



interface ContainerProps extends React.ComponentProps<'section'> {
  children: React.ReactNode;
}

export function Container( { children, className }: ContainerProps ) {
  return (
    <section className={twMerge( "m-auto  w-full max-w-[1280px] max-wrapper:px-4 transition-all ", className )}>
      {children}
    </section>
  );
}
