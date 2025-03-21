export interface ANIMAL_TYPE {
  id: string;
  nome: string;
  microchip: string;
  maturidade: string;
  raca: string;
  sexo: string;
  origem: string;
  porte: string;
  comportamento: string;
  especie: string;
  doencas: string[];
  status: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  parentId: string;
  parent: ANIMAL_TYPE;
  children: ANIMAL_TYPE[];
}

export interface ANIMAL_DATA {
  currentPage: number;
  data: ANIMAL_TYPE[];
  nextPage: number;
  totalPages: number;
  totalAnimals: number;
}