import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompUnoComponent } from './comp-uno/comp-uno.component';
import { CompDosComponent } from './comp-dos/comp-dos.component';



@NgModule({
  declarations: [CompUnoComponent, CompDosComponent],
  imports: [
    CommonModule
  ]
})
export class ModFuncionalModule { }
