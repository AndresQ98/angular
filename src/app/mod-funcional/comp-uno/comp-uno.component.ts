import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-uno',
  templateUrl: './comp-uno.component.html',
  styleUrls: ['./comp-uno.component.css']
})
export class CompUnoComponent implements OnInit {

  public titulo = 'Módulos';

  constructor() { }

  ngOnInit(): void {
  }

}
