import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { environment } from '../../../../environments/environment';
=======
>>>>>>> f6cdbc5f53505757d85473f9cdc87837f05590ad

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

<<<<<<< HEAD
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

=======
  // variável para armazenar as categorias obtidas da API
  categorias = signal<any[]>([]);

  //Estrutura de fomulario
  formulario = new FormGroup({
    nome: new FormControl(''),
    preco: new FormControl(''),
    quantidade: new FormControl(''),
    tipo: new FormControl(''),
    categoria_id: new FormControl('')
  });


>>>>>>> f6cdbc5f53505757d85473f9cdc87837f05590ad
  //Método executado quando o componente é inicializado
  ngOnInit() {
    //Fazendo uma requisição para a API
    this.http.get(this.apiUrl + '/categorias')
      .subscribe((data) => {
<<<<<<< HEAD
        //guardar os dados obtidos na variavel 'categorias' (signal)
        this.categorias.set(data as any[]);
=======
        // Guardar os dados obtidoa na variável categorias
        this.categorias.set(data as any[]);
      });
  }

  // método executado pelo formulario (SUBMIT)
  cadastrar() {
    // Fazendo uma requisição para a API
    this.http.post('http://localhost:5097/api/v1/produtos', this.formulario.value)
      .subscribe((data: any) => {
        // Exibir um alerta de sucesso
        alert(data.mensagem);
        // Limpar o formulário
        this.formulario.reset();
>>>>>>> f6cdbc5f53505757d85473f9cdc87837f05590ad
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