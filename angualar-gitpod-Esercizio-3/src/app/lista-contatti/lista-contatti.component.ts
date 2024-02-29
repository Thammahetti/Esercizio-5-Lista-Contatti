import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  imports: [],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {
  persone = [

    {nome: "Anna", cognome: "asdasdw", eta:23 , numero:23232321232, isOnline: true, Colore:daidsdsd },
    {nome: "Anna", cognome: "asdasdw", eta:23 , numero:23232321232, isOnline: true, Colore:daidsdsd },
 
  
 
  ]
}
