import { Injectable } from '@angular/core';
import { Contato } from '../models/Contato';



const BASE_DE_CONTATOS:Contato[]= [
  {
    nome:"Duda 1",
    email:"duda1@gmail.com",
    telefone:["11111-1111"]

  },
  {
    nome:"Duda 2",
    email:"duda2@gmail.com",
    telefone:["22222-2222"]

  },
  {
    nome:"Duda 3",
    email:"duda3@gmail.com",
    telefone:["3333-3333"]

  },
  {
    nome:"Duda 4",
    email:"duda4@gmail.com",
    telefone:["44444-4444"]

  }

];




@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor() { }
  
  getContatos(): Contato[] {
   return BASE_DE_CONTATOS;

  }

  // addContato(nome:string, email: string, telefone:string[]): void {

  //   let contato = { nome, email, telefone}
  //   BASE_DE_CONTATOS.push(contato)


  // }


  addContato(c:Contato): void {
      BASE_DE_CONTATOS.push(c)
  
    }



  }
  










