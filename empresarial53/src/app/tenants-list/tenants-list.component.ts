import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tenant } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.scss']
})
export class TenantsListComponent implements OnInit {

  public tenants:Tenant[] = [];

  constructor(private http:HttpClient, private router:Router){}
  
  public ngOnInit(): void {
    this.loadTenants();
  }

  public refresh(): void {
    window.location.reload();
}

  public loadTenants():void {
    this.http.get<Tenant[]>('api/locatario')
    .subscribe(response => this.onLoadTenants(response))
  }

  private onLoadTenants(response: Tenant[]):void {
    this.tenants = response;
  }

  public delete(index:number) {
    const tenant = this.tenants[index];
    this.http.delete(`/api/locatario/${tenant.cpfCnpj}`).subscribe(tenant => console.log(tenant));
    this.refresh();
  }

  public edit(index:number){
    const tenant = this.tenants[index];
    this.router.navigateByUrl(`/locatario/${tenant.cpfCnpj}`)
  }

}
