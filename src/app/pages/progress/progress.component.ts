import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso_uno: number = 20;
  progreso_dos: number = 50;

  constructor() { }

  ngOnInit() {
  }
  
  /*actualizar( event: number ) {
    this.progreso_uno = event;
  }*/

}
