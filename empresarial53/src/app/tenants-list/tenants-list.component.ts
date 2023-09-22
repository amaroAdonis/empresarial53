import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Tenant } from '../types';

@Component({
  selector: 'app-tenants-list',
  templateUrl: './tenants-list.component.html',
  styleUrls: ['./tenants-list.component.scss']
})
export class TenantsListComponent {

  public tenants:Tenant[] = [];

  constructor(private http:HttpClient){}

}
