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
      nome:"Duda",
      email:"duda@gmail.com",
      telefone:["77777-7777"]

    },
    {
      nome:"Duda",
      email:"duda@gmail.com",
      telefone:["77777-7777"]

    },
    {
      nome:"Duda",
      email:"duda@gmail.com",
      telefone:["77777-7777"]

    },
    {
      nome:"Duda",
      email:"duda@gmail.com",
      telefone:["77777-7777"]

    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
