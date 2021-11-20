import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public linktTheme = document.querySelector('#theme');// se comunica el id pulsado
  public links: NodeListOf<Element>; //obtiene clase del div

  constructor() { }

  classie:any;

  ngOnInit(): void {
    //this.links = document.querySelectorAll('.selector');//obtiene clase del div // se dispara despues de inicializado el componente
  }


  openMenu(){

    var menuLateral = document.getElementsByClassName("cbp-spmenu");
      for (var i = 0; i<menuLateral.length; i++) {
         menuLateral[i].classList.toggle("cbp-spmenu-open");
        // console.log(colorPais)

      }




  }

}
