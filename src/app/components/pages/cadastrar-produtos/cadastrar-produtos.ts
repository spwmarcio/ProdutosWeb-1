import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  selector: 'app-cadastrar-produtos',
  styleUrl: './cadastrar-produtos.css',
  templateUrl: './cadastrar-produtos.html',
})
export class CadastrarProdutos {

  //Atributo
  private apiUrl = environment.apiUrl;

  //injeção de dependência
  private http = inject(HttpClient);

  //variável para armazenar as categorias obtidas da API
  categorias = signal<any[]>([]);

  //estrutura do formulário
  formulario = new FormGroup({
    nome : new FormControl(''),
    preco : new FormControl(''),
    quantidade : new FormControl(''),
    tipo : new FormControl(''),
    categoria_id : new FormControl('')
  });

  //Método executado quando o componente é inicializado
  ngOnInit() {
    //Fazendo uma requisição para a API
    this.http.get(this.apiUrl + '/categorias')
      .subscribe((data) => {
        //guardar os dados obtidos na variavel 'categorias' (signal)
        this.categorias.set(data as any[]);
      });
  }

  //Método executado pelo formulário (SUBMIT)
  cadastrar() {
    //Fazendo uma requisição para a API
    this.http.post(this.apiUrl + '/produtos', this.formulario.value)
      .subscribe((data: any) => {
        alert(data.mensagem);
        this.formulario.reset();
      })
  }

}