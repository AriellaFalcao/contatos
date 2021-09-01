import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();

  novoContato:Contato = {
    nome:"",
    email:"",
    telefone:["","",""]
 }

  constructor() { }


  cancelar(){ 
    console.log("Cancelar digitacao")
    this.onCancelarClick.emit()

  }


  track(index:number, value:string){
    return index;
  }

  ngOnInit(): void {
  }

 


}
