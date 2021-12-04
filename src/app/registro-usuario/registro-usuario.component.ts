import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})

  export class RegistroUsuarioComponent {
    userForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: [''],
      direccion: this.fb.group({
        calle: [''],
        altura: [''],
        ciudad: [''],
        estado: [''],
      }),
      usuario: this.fb.group({
        nombreUsuario: ['', [Validators.required, Validators.minLength(8)]],
        contrasena: ['', [Validators.required, Validators.minLength(10)]],
      })
    });

  constructor(private fb: FormBuilder) {}

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    // TODO: Use EventEmitter with form value
    (document.getElementById('sndName') as HTMLImageElement).innerHTML = this.userForm.controls['nombre'].value;
    (document.getElementById('sndApellido') as HTMLImageElement).innerHTML = this.userForm.controls['apellido'].value;
    (document.getElementById('sndUsuario') as HTMLImageElement).innerHTML = this.userForm.controls['usuario.nombreUsuario'].value;

  }

 ngOnInit(){
  //code that will execute at the start of the loading process
  }


}

