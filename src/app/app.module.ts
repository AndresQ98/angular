import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompUnoComponent } from './mod-funcional/comp-uno/comp-uno.component';
import { CompDosComponent } from './mod-funcional/comp-dos/comp-dos.component';


@NgModule({
  declarations: [
    AppComponent,
    CompUnoComponent,
    CompDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
