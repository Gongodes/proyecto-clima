import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemperaturaService } from '../../services/temperatura.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrls: ['./tiempo.component.css']
})
export class TiempoComponent implements OnInit {

  formulario!: FormGroup;

  tiempo!: any;

  temperatura!: any;
  humedad!: any;

  descripcion!: any;

  errores!:boolean;

  mensajeError!: string;

  fecha = new Date();

  constructor(private fb: FormBuilder, private _tiempo: TemperaturaService) {
    this.iniciaFormulario();
  }

  ngOnInit(): void {
  }

  /**
  * método que crea e inicia un formulario.
  */
  iniciaFormulario() {

    this.formulario = this.fb.group({
      ciudad: ['', [Validators.required, Validators.pattern('^[a-zA-Z- ]*$')]],
      codigo: ['', [Validators.required, Validators.pattern('^[a-zA-Z- ]*$')]],

    })
  }

  consultar() {
    this.errores=false;
    console.log("Formulario: ", this.formulario)

    this._tiempo.getEstadoTiempo(this.formulario.get('ciudad')!.value, this.formulario.get('codigo')!.value)
      .subscribe(respuesta => {

        this.tiempo = respuesta;

        this.temperatura = Math.round(this.tiempo.main.temp - 273.15) + "°";
        this.humedad = this.tiempo.main.humidity + "%";

        this.descripcion = this.tiempo.weather[0].description;


      }, error =>{this.errores= true;
      this.mensajeError="Error al consultar el tiempo. intentelo nuevamente!!"})
  }
}
