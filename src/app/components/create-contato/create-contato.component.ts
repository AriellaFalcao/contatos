import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  @Output() onCancelarClick:EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancelar(){ 
    console.log("Cancelar digitacao")
    this.onCancelarClick.emit()

  }


}
