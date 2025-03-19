interface LastAnimalsProps { }

export function LastAnimals( props: LastAnimalsProps ) {



  const mockupAnimals = [
    {
      id: 1,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 2,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 3,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 4,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 5,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    }
    ,
    {
      id: 6,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },

    {
      id: 7,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },

    {
      id: 8,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },

    {
      id: 9,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    }
    ,
    {
      id: 10,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 11,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 12,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 13,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 14,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 15,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 16,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    }
    ,
    {
      id: 17,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 18,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 19,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 20,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 21,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 22,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 23,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 24,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 25,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    },
    {
      id: 26,
      name: "Bolinha",
      especie: "Cachorro",
      maturidade: "Vira-lata",
      dataDeCadastro: "12/09/2021",
    }
  ]

  const dozePrimeirosAnimais = mockupAnimals.slice( 0, 12 );
  console.log( dozePrimeirosAnimais.length )

  return (
    <div className="bg-indigo-50/60 flex-col col-span-2 gap-8 rounded-2xl flex px-8 py-12 ">
      <h3 className="text-18 font-bold">Últimos animais registrados</h3>
      <div className=" gap-16 columns-2 max-[980px]:columns-1 max-[1240px]:gap-8 overflow-x-scroll">
        {dozePrimeirosAnimais.map( ( animal ) => {
          return animal ? (
            <div key={animal.id} className="flex gap-16 max-[1240px]:gap-8 border-b border-gray-200 py-2 max-[980px]:gap-28 max-sm:gap-10">
              <p className="py-2 shrink-0">{animal.id}</p>
              <p className="py-2 shrink-0">{animal.name}</p>
              <p className="py-2 shrink-0">{animal.especie}</p>
              <p className="py-2 shrink-0">{animal.maturidade}</p>
              <p className="py-2 shrink-0">{animal.dataDeCadastro}</p>
            </div>
          ) : null;
        } )}
      </div>
    </div>
  );
}
