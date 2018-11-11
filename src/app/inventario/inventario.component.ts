import { Component, OnInit } from '@angular/core';
import { Inventarios } from '../shared/models/inventarios';
import { MockInventario, Categorias } from '../shared/mock-inventario';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  inventario : Array<Inventarios>;
  selectedProduct : Inventarios;
  categorias : Array<string>;

  constructor() { }

  ngOnInit() {
    this.inventario = MockInventario;
    this.categorias = Categorias;
  }

  select(producto : Inventarios ){
    this.selectedProduct = producto;
  }

  productSubmit(){
    this.selectedProduct = null;
  }

  sumarProducto(){
    this.selectedProduct.cantidad += 1;
  }

  restarProducto(){
    this.selectedProduct.cantidad -= 1;
  }
}
