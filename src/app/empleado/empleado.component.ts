import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent {
  nombre = "John";
  apellido = "Wall";
  edad = 17;
  docIdentidad = "41540260Y";
  empresa = "Google";

  /*getEdad() {
    return this.edad
  }
  */

  cambiaEmpresa(event: Event) {
    this.empresa = (<HTMLInputElement>event.target).value;
  }

  activarCuadro = false;
  usuRegistrado = false;
  textoRegistro = ""

  habilitarCuadro() {
    this.activarCuadro = false;
  }

  setUsuarioRegistrado(event: Event) {
    if ((<HTMLInputElement>event.target).value == "si") {
      this.textoRegistro = "Usuario Registrado";
    } else {
      this.textoRegistro = "Usuario no registrado"
    }
  }

  llamaEmpresa(value: string) {
  }
}
