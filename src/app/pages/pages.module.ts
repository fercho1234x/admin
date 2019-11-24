import { NgModule } from "@angular/core";

// MODULOS
import { SahredModule } from '../shared/shared.module';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    // Por si se requires estos modulos en otro componente
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SahredModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}
