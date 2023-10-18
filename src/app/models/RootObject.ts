import { Person } from './Person';
import { Inscription } from './Inscription';

export class RootObject {
    email: string ="";
    people!: Person[];
    inscriptions!: Inscription[];
  }