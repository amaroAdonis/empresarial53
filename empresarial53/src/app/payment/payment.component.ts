import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  public title?:string;

  public form:FormGroup = new FormGroup({
    numeroSala: new FormControl(null, [Validators.required]),
    diaPagamento: new FormControl(null, [Validators.required]),
    valor: new FormControl(null, [Validators.required]),
    observacao: new FormControl(null, [Validators.required]),
    formaPagamento: new FormControl(null, [Validators.required])
  })

  

}
