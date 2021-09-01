import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contato } from 'src/app/models/Contato';
import { ContatoService } from 'src/app/services/contato.service';

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
    telefone:[""]
 }

 cs:ContatoService = new ContatoService();

  constructor() { }


  cancelar(){ 
    console.log("Cancelar digitacao")
    this.onCancelarClick.emit()

  }


  track(index:number, value:string){
    return index;
  }

  addTelefone():void {
    this.novoContato.telefone.push("");

  }

  salvar(){
    this.cs.addContato(this.novoContato);
    // apos adicionar e a tela modal fecha
    this.onCancelarClick.emit();

    //Manter a tela modal e limparos campos de adicionar
    // this.novoContato = {
    //   nome:"",
    //   email:"",
    //   telefone:[""]
    // }
  }

  removeTelefone(outrosTelefone:number):void{
    this.novoContato.telefone.splice(outrosTelefone,1);

  }





  ngOnInit(): void {
  }

 


}
