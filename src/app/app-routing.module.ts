import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrimeneLhComponent } from './components/crimene-lh/crimene-lh.component';
import { DatosVictimasComponent } from './components/datos-victimas/datos-victimas.component';
import { ViolacionesDdhhComponent } from './components/violaciones-ddhh/violaciones-ddhh.component';

const routes: Routes = [

  {path:'detalles',
  children:[
    {path:'datos-victimas', component:DatosVictimasComponent},
    {path:'crimenes-lh', component:CrimeneLhComponent},
    {path:'violaciones-ddhh', component:ViolacionesDdhhComponent}
  ]


  }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
