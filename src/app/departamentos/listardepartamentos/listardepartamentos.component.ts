import { Component, OnInit } from '@angular/core';
import{ Idepartamentos} from '../service/idepartamentos'
import { DepartamentosService } from '../service/departamentos.service';
import { ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-listardepartamentos',
  templateUrl: './listardepartamentos.component.html',
  styleUrls: ['./listardepartamentos.component.scss']
})
export class ListardepartamentosComponent {
  departamento: Idepartamentos[]=[];
  
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
})

  constructor(
    private service: DepartamentosService, 
    private router: Router, 
    private route: ActivatedRoute){ }

  ngOnInit(): void {
     this.Listar();
  }

  Listar(){
     // a minha variavel do tipo cursos está recebendo o json da API
     this.service.listar().subscribe(dados => this.departamento = dados);
  }

  Editar(id:number){
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  Excluir(id:number){
    this.service.excluir(id).subscribe(
      success => {
        alert("Departamento excluido com sucesso!")
        this.service.listar().subscribe(dados => this.departamento = dados);
      },
      Error => alert("Erro ao excluir o departamento ")
    );
  }
}
