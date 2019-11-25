import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('inputProgreso', {static: false}) inputProgreso: ElementRef;

  @Input() leyenda:string = 'leyenda';
  @Input() progreso:number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges( newValue: number ) {

    if ( newValue >= 100 ) {
      this.progreso = 100;
    } else if( newValue <= 0 ) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }
  
    this.inputProgreso.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

  }

  cambiarValor( number: number ) {

    if ( this.progreso <= 0 && number < 0 || this.progreso >= 100 && number > 0 ) {
      return;
    }

    this.progreso += number;

    this.cambioValor.emit( this.progreso );

  }

}
