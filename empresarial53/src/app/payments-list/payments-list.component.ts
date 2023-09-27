import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../types';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styleUrls: ['./payments-list.component.scss']
})
export class PaymentsListComponent implements OnInit {

  public payments:Payment[] = [];
  
  constructor(private http:HttpClient, private router:Router){}
  
  public ngOnInit(): void {
    this.loadPayments();
  }

  public refresh(): void {
    window.location.reload();
}

public loadPayments():void {
  this.http.get<Payment[]>('api/pagamento')
  .subscribe(response => this.onLoadPayments(response))
}

private onLoadPayments(response: Payment[]):void {
  this.payments = response;
}

public delete(index:number) {
  const payment = this.payments[index];
  this.http.delete(`/api/pagamento/${payment.orderNum}`).subscribe(payment => console.log(payment));
  this.refresh();
}

public edit(index:number){
  const payment = this.payments[index];
  this.router.navigateByUrl(`/pagamento/${payment.orderNum}`)
}

}
