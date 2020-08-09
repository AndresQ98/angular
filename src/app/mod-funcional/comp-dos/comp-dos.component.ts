import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-dos',
  templateUrl: './comp-dos.component.html',
  styleUrls: ['./comp-dos.component.css']
})
export class CompDosComponent implements OnInit {

  public titulo = 'Componentes y directivas';

  constructor() { }

  ngOnInit(): void {
  }

}
