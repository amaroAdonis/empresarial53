import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Payment } from '../types';
import { ActivatedRoute } from '@angular/router';
import { ScreenStrategy } from './strategies/screen-strategy';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  public title?:string;
  public payments: Payment[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private screenStrategy:ScreenStrategy){}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("orderNum"));
    this.screenStrategy.loadPayment(id)
      .then(resp => this.populateForm(resp));
      this.title = this.screenStrategy.getTitle();
  }

  public alert(): void {
    window.alert("Pagamento informado com sucesso!")
  }

  private populateForm(payment:Payment):void {
    this.form.patchValue(payment);
  }

  public form:FormGroup = new FormGroup({
    numeroSala: new FormControl(null, [Validators.required]),
    diaPagamento: new FormControl(null, [Validators.required]),
    valor: new FormControl(null, [Validators.required]),
    observacao: new FormControl(null, [Validators.required]),
    formaPagamento: new FormControl(null, [Validators.required])
  })

  public submit():void {
    this.screenStrategy.savePayment(this.form.value);
    this.alert();
  }
}
