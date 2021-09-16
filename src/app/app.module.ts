import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { httpInterceptorProviders } from './http-interceptors/index';
import Raphael from 'raphael';

//editor
import { CKEditorModule } from 'ckeditor4-angular';




// modulos
import { OrderModule } from 'ngx-order-pipe';
import {ComponentsModule} from './components/components.module'
import {PipesModule} from './pipes/pipes.module'


//servicios
import { PaisService } from './services/pais.service';
import { DatosvictimaService } from './services/datos.service';
import { ViolacionesddhhService } from './services/violaciones.service';
import { CrimeneslhService } from './services/crimeneslh.service';
import { MapaService } from './services/mapa.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  exports:[

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    OrderModule,
    CKEditorModule,
    ComponentsModule,
    PipesModule

  ],
  providers: [
    //httpInterceptorProviders,
    PaisService,
    DatosvictimaService,
    ViolacionesddhhService,
    CrimeneslhService,
    MapaService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
