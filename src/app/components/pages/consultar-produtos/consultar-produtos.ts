import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  selector: 'app-consultar-produtos',
  styleUrl: './consultar-produtos.css',
  templateUrl: './consultar-produtos.html',
})
export class ConsultarProdutos {

//Atributo
private apiUrl = environment.apiUrl;

// Injeção de dependencias
private http = inject(HttpClient);

//estrutura de fomulario
formulario = new FormGroup({
  nome : new FormControl('',[ Validators.required])
});

// Função executada quando o formulario e enviado(submit)
consultar(){

//Capturando o nome preechido no formulario
const nome = this.formulario.get('nome')?.value;

// Enviando para a API (endpoint de consulta
this.http.get(this.apiUrl + '/produtos?nome=' + nome)
.subscribe((data) => {
  console.log(data);
})

}

}

