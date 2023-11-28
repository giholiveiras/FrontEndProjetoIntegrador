import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosModule } from './departamentos/departamentos.module';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo:''},
{path: 'departamentos', loadChildren:()=>DepartamentosModule}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
