import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-lista-de-contatos',
  templateUrl: './lista-de-contatos.component.html',
  styleUrls: ['./lista-de-contatos.component.css']
})
export class ListaDeContatosComponent implements OnInit {

  contatos: Contato[] = [
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

  constructor() { }

  ngOnInit(): void {
  }

}
