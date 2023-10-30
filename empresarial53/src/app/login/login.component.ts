import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public constructor (private httpClient:HttpClient, private router:Router) {};

  public form:FormGroup = new FormGroup ({
    email: new FormControl (null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  public login():void {
    const {email, password} = this.form.value;
    this.httpClient.post<any>('/api/login', {email, password})
    .subscribe( () => {
      this.router.navigateByUrl('/ home')
    }

    )  
  }

  public alert(): void {
    window.alert("Favor, enviar um e-mail para 'empresarial53@gmail.com', informando seu nome completo e e-mail utilizado no login.")
  }

}
