import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Usuario } from './../../usuario.model';


import { Autenticacao } from './../../autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  // Para acessar o atributo pai
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<string>()

//Atributo do Formulário
  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)

  })

  constructor(private autenticacao: Autenticacao) { }

  ngOnInit(): void {
  }

  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login')
  }


  public cadastrarUsuario(): void {
    //console.log(this.formulario)

    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )
    this.autenticacao.cadastrarUsuario(usuario)
      .then(() => this.exibirPainelLogin())
  }

}
