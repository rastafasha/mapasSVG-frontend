import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { PaisResposive } from './interfaces/pais.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() paisrespuesta:PaisResposive;
  @Input() paisrespuestacrimenes:PaisResposive;
  @Input() paisrespuestaViolaciones:PaisResposive;


constructor(){}

  ngOnInit() {
    window.scrollTo(0, 0);


  }



}
