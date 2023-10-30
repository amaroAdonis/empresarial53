import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Tenant } from '../types';
import { ActivatedRoute } from '@angular/router';
import { ScreenStrategy } from './strategies/screen-strategy';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {

  public title?: string;
  public tenants: Tenant[] = [];
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private screenStrategy:ScreenStrategy,
    ){}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("cpfCnpj");
    this.screenStrategy.loadTenant(<string>id)
      .then(resp => this.populateForm(resp));
    this.title = this.screenStrategy.getTitle();
  }
  private populateForm(tenant:Tenant):void {
    this.form.patchValue(tenant);
  }
  public alert(): void {
    window.alert("Locatário adicionado com sucesso!")
}
  public form: FormGroup = new FormGroup ({
    numeroSala: new FormControl(null, [Validators.required]),
    nome: new FormControl(null, [Validators.required]),
    cpfCnpj: new FormControl(null, [Validators.required]),
    inicioContrato: new FormControl(null, [Validators.required]),
    fimContrato: new FormControl(null, [Validators.required]),
    valorContrato: new FormControl(null, [Validators.required]),
    diaVencimento: new FormControl(null, [Validators.required]),
    atividade: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    telefone: new FormControl(null, [Validators.required]),
    whatsapp: new FormControl(null, [Validators.required]),
    numeroContrato: new FormControl(null, [Validators.required]),
    active: new FormControl(null, [Validators.required])
  })

  public submit():void {
    this.screenStrategy.saveTenant(this.form.value)
    this.alert();
  }
}
