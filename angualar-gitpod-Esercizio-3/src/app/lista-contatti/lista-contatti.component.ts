import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'lista-contatti',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {
  persone = [

    {nome: "Paul", cognome: "Atreides", eta:23 , numero:3287866767, isOnline: true, colore:"white", foto: "../../assets/1.jpg" },
    {nome: "Leto ", cognome: "Atreides", eta:54 , numero:3282388967, isOnline: true, colore:"gray", foto: "../../assets/2.jpg" },
    {nome: "Lady ", cognome: "Jessica", eta:44 , numero:3282342993, isOnline: true, colore:"yellow", foto: "../../assets/3.jpg" },
    {nome: "Thufir ", cognome: "Hawat", eta:32 , numero:3834348989, isOnline: true, colore:"gold", foto: "../../assets/10.png" },
    {nome: "Duncan ", cognome: "Idaho", eta:32 , numero:3832348989, isOnline: false, colore:"orange", foto: "../../assets/5.png" },
    {nome: "Chani ", cognome: "Kynes", eta:22 , numero:3282564292, isOnline: true, colore:"pink",foto: "../../assets/4.jpg" },
    {nome: "Gurney ", cognome: "Halleck", eta:56 , numero:328236592, isOnline: false, colore:"purple",foto: "../../assets/6.jpg" },
    {nome: "Vladimir ", cognome: "Harkonnen", eta:76 , numero:3253334392, isOnline: true, colore:"blue",foto: "../../assets/7.jpg" },
    {nome: "Stilgar", cognome: "Arrakis", eta:53 , numero:326234392, isOnline: false, colore:"cyan",foto: "../../assets/8.jpg" },
    {nome: "Glossu  ", cognome: "Rabban", eta:56 , numero:3265334392, isOnline: false, colore:"darkcyan",foto: "../../assets/9.jpg" },
   
 
  ]
}
