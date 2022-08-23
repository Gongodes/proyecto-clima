import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TiempoComponent } from './componentes/tiempo/tiempo.component';

const routes:Routes = [

  {path: 'tiempo', component: TiempoComponent},
  {path: '', redirectTo: '/tiempo',pathMatch: 'full'},
  {path: '**', component: TiempoComponent}
]

@NgModule({

  imports: [
RouterModule.forRoot (routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
