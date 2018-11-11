import { Inventarios } from "./models/inventarios";

export const MockInventario : Inventarios[] = [
    {nombre: "Celular", marca: "Apple", cantidad: 5, categoria: "Tecnología"},
    {nombre: "Estufa", marca: "General Electric", cantidad: 3, categoria: "Electrodomesticos"},
    {nombre: "Computadora", marca: "Dell", cantidad: 10, categoria: "Tecnología"},
    {nombre: "Equipo de Sonido", marca: "Sony", cantidad: 7, categoria: "Tecnología"},
    {nombre: "Refrigeradora", marca: "LG", cantidad: 6, categoria: "Electrodomesticos"},
    {nombre: "Lavadora", marca: "Whirpool", cantidad: 2, categoria: "Electrodomesticos"},
    {nombre: "Router", marca: "Cisco", cantidad: 9, categoria: "Tecnología"},
    {nombre: "Smart Watch", marca: "Apple", cantidad: 15, categoria: "Tecnología"},
    {nombre: "Televisor", marca: "Samsung", cantidad: 10, categoria: "Tecnología"}
];

export const Categorias : string[] = [
    "Electrodomesticos",
    "Tecnología"
];
