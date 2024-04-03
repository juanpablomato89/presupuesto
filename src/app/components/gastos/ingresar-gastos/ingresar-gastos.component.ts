import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent implements OnInit {
  nombreGasto = '';
  cantidad = 0;
  formularioIncorrecto = false;
  textIncorrecto = 'Nombre Gasto o Cantidad Incorrecto';
  constructor(private _presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
  }

  agregarGasto() {
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor a la restante';
      this.nombreGasto = '';
      this.cantidad = 0;
      return;
    }


    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Nombre Gasto o Cantidad Incorrecto';
    } else {

      const GASTO = {
        gasto: this.nombreGasto,
        cantidad: this.cantidad
      }

      this._presupuestoService.agregarGasto(GASTO);

      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;

    }
  }

}
