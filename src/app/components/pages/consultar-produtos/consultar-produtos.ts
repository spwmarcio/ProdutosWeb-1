import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
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

// Função signal para armazenar os produtos obtidos da API
produtos = signal<any[]>([]);

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
  // Armazenando os produtoa obtidos na função signal
  this.produtos.set(data as any[]);
});


}

// Função para excluir um produto
excluir(id: string){
  //Popup de confirmação antes de excluir
  if(confirm('Tem certeza que deseja excluir este produto?')){

   // Enviando para a API (endpoint de exclusão)
  this.http.delete(this.apiUrl + '/produtos/' + id)
  .subscribe((data: any) => {
    alert(data.mensagem); // Exibindo a mensagem de sucesso da API

    this.consultar(); // Recarregando a lista de produtos após a exclusão
  });
  }    
  }

  // Função para redirecionar para a página de edição de produto
  editar(id: string){
    window.location.href = '/editar-produtos/' + id;
  }
  

}