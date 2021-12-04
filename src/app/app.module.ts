import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                               // <========== Add this line!
    ReactiveFormsModule                        // <========== Add this line!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
