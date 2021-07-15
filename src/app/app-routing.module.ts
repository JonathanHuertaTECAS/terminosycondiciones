import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminosComponent } from './components/terminos/terminos.component';

const routes: Routes = [
  { path: 'terminos-y-condiciones/:dta', component: TerminosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
