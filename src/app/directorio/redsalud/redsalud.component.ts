import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redsalud',
  templateUrl: './redsalud.component.html',
  styleUrls: ['./redsalud.component.css']
})
export class RedsaludComponent implements OnInit {
  private persona = [
    {
      red: "Melgar",
      cargo: "Director General",
      nombre: "Jorge Enrique",
      celular: 989109782
    },
    {
      red: "San Román",
      cargo: "Sub-Director General",
      nombre: "Pepe Vazquez",
      celular: 971782501
    }, 
    {
      red: "Sandia",
      cargo: "Secretaria General",
      nombre: "Carla Flores",
      celular: 909656201 
    }, 
    {
      red: "San Román",
      cargo: "Director",
      nombre: "Alberto Mendoza",
      celular: 951012620  
    }, 
    {
      red: "Lampa",
      cargo: "Asesor",
      nombre: "Edwin Ortiz",
      celular: 951012620
    }  
  ]

  constructor() { }

  ngOnInit() {
  }

}
