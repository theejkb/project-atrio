import { Personne } from "./personne.model";

export interface Emploi {
    id?: number;
    nomEntreprise: string;
    poste: string;
    dateDebut: string; 
    personne?: Personne; 
  }

  