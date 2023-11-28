import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentosRoutingModule } from './departamentos-routing.module';
import { ListardepartamentosComponent } from './listardepartamentos/listardepartamentos.component';



@NgModule({
  declarations: [
    ListardepartamentosComponent,
  
  ],
  imports: [
    CommonModule,
    DepartamentosRoutingModule
  ]
})
export class DepartamentosModule { }
