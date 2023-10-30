import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tenant } from '../types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  

  public rooms:(Partial<Tenant>&{active: boolean})[] = [
    {nome: `Sala 1`, active: false, numeroSala: 1},
    {nome: "Sala 2", active: false, numeroSala: 2},
    {nome: "Sala 3", active: false, numeroSala: 3},
    {nome: "Sala 4", active: false, numeroSala: 4},
    {nome: "Sala 5", active: false, numeroSala: 5},
    {nome: "Sala 6", active: false, numeroSala: 6},
    {nome: "Sala 7", active: false, numeroSala: 7},
    {nome: "Sala 8", active: false, numeroSala: 8},
    {nome: "Sala 9", active: false, numeroSala: 9},
    {nome: "Sala 10", active: false, numeroSala: 10},
    {nome: "Sala 11", active: false, numeroSala: 11},
    {nome: "Sala 12", active: false, numeroSala: 12},
    {nome: "Sala 13", active: false, numeroSala: 13},
    {nome: "Sala 14", active: false, numeroSala: 14},
    {nome: "Sala 15", active: false, numeroSala: 15},
    {nome: "Sala 16", active: false, numeroSala: 16},
    {nome: "Sala 17", active: false, numeroSala: 17},
  ];



  constructor(private http:HttpClient, private router:Router){}

  ngOnInit(): void {
    //this.loadTenants();
  }

  public goto(room:number|undefined):void {
      this.router.navigateByUrl(`/sala/${room}`);
  }

  public loadTenants():void {
    this.http.get<Partial<Tenant>&{active: boolean}[]>('api/locatario')
    .subscribe(response => this.onLoadTenants(response))
  }

  private onLoadTenants(response: Partial<Tenant>&{active: boolean}[]):void {
    this.rooms = response;
  }



}
