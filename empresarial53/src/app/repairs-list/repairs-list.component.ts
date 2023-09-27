import { Component, OnInit } from '@angular/core';
import { Repair } from '../types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repairs-list',
  templateUrl: './repairs-list.component.html',
  styleUrls: ['./repairs-list.component.scss']
})
export class RepairsListComponent implements OnInit {

  public repairs:Repair[] = [];

  constructor(private http:HttpClient, private router:Router){}

  public ngOnInit(): void {
    this.LoadRepairs();
  }

  public refresh(): void {
    window.location.reload();
}

  public LoadRepairs():void {
    this.http.get<Repair[]>(`api/manutencao`)
    .subscribe(response => this.onLoadRepairs(response))
  }

  private onLoadRepairs(response:Repair[]):void {
    this.repairs = response;
  }

  public delete(index:number):void {
    const repair = this.repairs[index];
    this.http.delete(`api/manutencao/${repair.orderNum}`)
      .subscribe(repair => console.log(repair));
    this.refresh();
  }

  public edit(index:number):void {
    const repair = this.repairs[index];
    this.router.navigateByUrl(`/manutencao/${repair.orderNum}`)
  }
}
