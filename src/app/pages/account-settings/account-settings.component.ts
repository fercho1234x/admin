import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  
  /*
    Referencia a todo el DOM
    Es lo mismo que hacer:
     document.algo :D
  */
  constructor( 
    private _settingsService: SettingsService 
  ) { }

  ngOnInit() {
    this.colocarCheck();
  }
  
  cambiarColor( theme: string, ref: any ) {
    
    // Remover Clase y agregar clase
    $('.selector').removeClass('working');
    ref.classList.add( 'working' );
    
    this._settingsService.aplicarTema( theme );

  }

  colocarCheck() {
    let tema = this._settingsService.ajustes.tema;
    let theme_class = `${ tema }-theme`;
    document.querySelector( `.${ theme_class }` ).classList.add( 'working' );
  }

}
