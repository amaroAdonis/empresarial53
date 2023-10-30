import { Component, OnInit } from '@angular/core';
import { Repair, Tenant } from '../types';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-template',
  templateUrl: './room-template.component.html',
  styleUrls: ['./room-template.component.scss']
})
export class RoomTemplateComponent implements OnInit {

  public tenant:Tenant | undefined;
  public repairs:Repair[] = [];

  constructor(
    private http:HttpClient,
    private activatedRoute:ActivatedRoute
    ) {}


  ngOnInit(): void {
    const numeroSala = this.activatedRoute.snapshot.paramMap.get("numeroSala");
    this.getTenant(numeroSala);
    this.getRepairs(numeroSala);
  }

  public getTenant(numeroSala: string | null):void{
    this.http.get<Tenant>(`api/locatario/${numeroSala}`)
    .subscribe(response => this.onLoadTenant(response));
  }

  private onLoadTenant(response: Tenant):void {
    this.tenant = response;
  }

  public getRepairs(numeroSala:string | null):void {
    this.http.get<Repair[]>(`api/manutencao/2manutencoes/${numeroSala}`)
    .subscribe(response => this.onLoadRepairs(response))
  }

  private onLoadRepairs(reponse: Repair[]): void {
    this.repairs = reponse;
  }

}
