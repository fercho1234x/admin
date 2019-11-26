import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor( @Inject( DOCUMENT ) private _document ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse( localStorage.getItem( 'ajustes' ) );
      this.aplicarTema( this.ajustes.tema );
    }
  }

  aplicarTema(theme: string) {
    // Url theme
    let url = `assets/css/colors/${ theme }.css`;
    this._document.querySelector( '#theme' ).setAttribute( 'href', url );

    // Guardar LS
    this.ajustes.tema = theme;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl: string,
  tema: string
}
