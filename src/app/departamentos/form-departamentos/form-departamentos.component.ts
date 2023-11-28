import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DepartamentosService } from '../service/departamentos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Idepartamentos } from '../service/idepartamentos';

@Component({
  selector: 'app-form-departamentos',
  templateUrl: './form-departamentos.component.html',
  styleUrls: ['./form-departamentos.component.scss']
})
export class FormDepartamentosComponent implements OnInit{
  form = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(''),
    localidade: new FormControl(''),
    descricaoAtividades: new FormControl(''),
    email: new FormControl(''),
})

constructor(
private service:DepartamentosService,
private route:ActivatedRoute,
private router: Router
){ }

ngOnInit(){ this.ListarPorId(); }

Salvar() {
  if(this.form.value.id){
    this.service.atualizar(this.form.value).subscribe(
      success => {
        alert("Departamento atualizado com sucesso!");
        this.router.navigate(['']);
      },
      Error => alert("Erro ao atualizar o departamento ")
    );
  }

  else{ 
    this.service.criar(this.form.value).subscribe(
      success => {
        alert("Departamento cadastrado com sucesso!");
        this.router.navigate(['']);
      },
      Error => alert("Erro ao cadastrar o departamento ")
    );
  }

  this.form.reset();

}

ListarPorId(){
  // essa função captura os parametros da rota. captura o valor da rota, seja ele nulo 
  // ou não e adiciona o parametro capturado no formulário através da função atualizarForm
  // o Pipe garante que será feita uma requisição no servidor e essa requisição será finalizada.
  // O subscribe inscreve / executa a função.
  this.route.params
  .pipe(
    map((params: any) => params['id']),
    switchMap(id => this.service.listarPorId(id))

  ).subscribe(departamentos => this.atualizarForm(departamentos));
}

atualizarForm(departamentos: Idepartamentos){
  // o comando abaixo refere-se esse vormulário recebera o 
  // valor do caminho = valor da URL
  this.form.patchValue({
    id: departamentos.id,
    nome:departamentos.nome,
    localidade:departamentos.localidade,
    descricaoAtividades:departamentos.descricaoAtividades,
    email:departamentos.email,

  });

}

Cancelar() {
this.form.reset();
console.log('Cancelado');
}

}
