import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  
  subscription: Subscription;

  constructor() {
    this.subscription = this.regresaObservable()
    /*
    .pipe( 
      retry( 2 )
    )
    */
    .subscribe( 
      data => {
        console.log( data );
      },
      error => {
        console.log( error );
      },
      () => {
        console.log( 'El observador termino' );
      }
    )

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }
  
  regresaObservable() : Observable<any> {
    return new Observable( observer => {
      
      let contador = 0;

      let intervalo = setInterval( () => {

        contador++;
        // Next es cuando se cumple el observador
        
        let salida = {
          valor: contador
        }

        observer.next( salida );
        
        /*if ( contador == 3 ) {
          observer.complete();
          clearInterval( intervalo );
        } 
        /*else {
          if (contador === 2) {
            clearInterval( intervalo );
            observer.error('auxilio');
          }
        }*/

      }, 1000 );

    }).pipe(
      map( (data: any) => {
        return data.valor;
      }),
      filter( ( data, index ) => {
        //console.log( data, index )
        if( data % 2 === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    )
  }

}
