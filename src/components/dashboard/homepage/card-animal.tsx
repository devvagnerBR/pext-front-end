
interface CardAnimalProps {
  src: string,
  animalQuantity: number,
  foodQuantity: number,
  daysRemaining: number
  color: string,
  cardTitle: string
}

export function CardAnimal( { animalQuantity, foodQuantity, daysRemaining, src, color, cardTitle }: CardAnimalProps ) {


  return (
    <div className="bg-indigo-50/60 flex-col gap-8 rounded-2xl flex items-center justify-center p-4 py-12 max-lg:justify-start ">
      <img src={src} alt="" />
      <h5 className={`${color === "red" ? "bg-red-400" : "bg-indigo-500"} rounded-4xl px-8 text-16 py-2 text-gray-50 font-normal}`}>{cardTitle}</h5>
      <div className="space-y-2 flex items-center flex-col">
        <p><span className="font-semibold text-16">{animalQuantity}</span> {cardTitle.toLowerCase()} cadastrados</p>
        <p><span className="font-semibold text-16">{foodQuantity} kg</span> de ração no estoque</p>
        <p className="mt-4 text-center">Temos ração para os {cardTitle.toLowerCase()} por <span className="font-semibold text-16">{daysRemaining}</span> dias</p>
      </div>
    </div>
  );
}
