import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localePE from '@angular/common/locales/es-EC';
import { registerLocaleData } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MisionvisionComponent } from './institucional/misionvision/misionvision.component';
import { ObjetivosComponent } from './institucional/objetivos/objetivos.component';
import { UbicacionComponent } from './institucional/ubicacion/ubicacion.component';
import { HistoriaComponent } from './institucional/historia/historia.component';
import { CreacionComponent } from './institucional/creacion/creacion.component';
import { EstructuraComponent } from './institucional/estructura/estructura.component';
import { MarcolegalComponent } from './institucional/marcolegal/marcolegal.component';
import { RedsaludComponent } from './directorio/redsalud/redsalud.component';
import { AseguramientoComponent } from './organo/aseguramiento/aseguramiento.component';
import { DocumentosgestionComponent } from './transparencia/documentosgestion/documentosgestion.component';

registerLocaleData(localePE);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MisionvisionComponent,
    ObjetivosComponent,
    UbicacionComponent,
    HistoriaComponent,
    CreacionComponent,
    EstructuraComponent,
    MarcolegalComponent,
    RedsaludComponent,
    AseguramientoComponent,
    DocumentosgestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "es-EC" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
