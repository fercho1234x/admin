import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  
  titulo: string;

  constructor( 
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {
      this.getDataRoute().subscribe( ( data:any ) => {
        this.titulo = data.title;
        this.title.setTitle( this.titulo );

        const METATAG: MetaDefinition = {
          name: 'description',
          content: this.titulo
        }

        this.meta.updateTag( METATAG );

      })
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd ) => evento.snapshot.firstChild === null ),
      map( evento => evento.snapshot.data )
    )
  }

}
