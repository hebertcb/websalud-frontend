import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MisionvisionComponent } from './institucional/misionvision/misionvision.component';
import { ObjetivosComponent } from './institucional/objetivos/objetivos.component';
import { UbicacionComponent } from './institucional/ubicacion/ubicacion.component';
import { HistoriaComponent } from './institucional/historia/historia.component';
import { EstructuraComponent } from './institucional/estructura/estructura.component';
import { CreacionComponent } from './institucional/creacion/creacion.component';
import { MarcolegalComponent } from './institucional/marcolegal/marcolegal.component';
import { DocumentosgestionComponent } from './transparencia/documentosgestion/documentosgestion.component';
import { AseguramientoComponent } from './organo/aseguramiento/aseguramiento.component';
import { RedsaludComponent } from './directorio/redsalud/redsalud.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
    {path: 'institucional/mision-y-vision', component: MisionvisionComponent}, 
    {path: 'institucional/objetivos', component: ObjetivosComponent},
    {path: 'institucional/ubicacion', component: UbicacionComponent},
    {path: 'institucional/historia', component: HistoriaComponent},
    {path: 'institucional/creacion', component: CreacionComponent},
    {path: 'institucional/estructura', component: EstructuraComponent},
    {path: 'institucional/marco-legal', component: MarcolegalComponent},
    {path: 'directorio/redes-de-salud', component: RedsaludComponent, canActivate:[AuthGuard]},
    {path: 'directorio/login', component: LoginComponent},
    {path: 'organo/aseguramiento-publico', component: AseguramientoComponent},
    {path: 'transparencia/documentos-de-gestion', component: DocumentosgestionComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
