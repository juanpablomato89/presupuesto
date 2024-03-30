import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto = 0;
  restante = 0;
  constructor() { }
}
