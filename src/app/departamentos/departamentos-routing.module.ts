import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListardepartamentosComponent } from './listardepartamentos/listardepartamentos.component';
import { FormDepartamentosComponent } from './form-departamentos/form-departamentos.component';
const routes: Routes = [
{path:"", component:ListardepartamentosComponent},
{path: "novo", component: FormDepartamentosComponent},
{path: "editar/:id", component: FormDepartamentosComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartamentosRoutingModule { }
