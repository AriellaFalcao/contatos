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

  private baseDeContatos: Contato[];
  private chave:string = "CONTATOS";

  constructor() { 
    // carregando informacões do localStorage na chave CONTATOS
   let dados = window.localStorage.getItem(this.chave);

   //verificando se as informacoes existem
    if(dados){

      // existe. transforma dados em arry e guarda em base de Contatos
      this.baseDeContatos = JSON.parse(dados);
    }else{

      // nao existe

      // poe uma string json com array vazio no localStorage

        window.localStorage.setItem(this.chave,"[]");

        //pondo um array vazio no atributo basedecontatos
        this.baseDeContatos = []
      }
    }
  }
    
  
  getContatos(): Contato[] {
   return this.baseDeContatos;

  }

  // addContato(nome:string, email: string, telefone:string[]): void {

  //   let contato = { nome, email, telefone}
  //   BASE_DE_CONTATOS.push(contato)


  // }


  addContato(c:Contato): void {
     this.baseDeContatos.push(c)
     window.localStorage.setItem(this.chave, JSON.stringify(this.baseDeContatos));
  
    }
  }

  










