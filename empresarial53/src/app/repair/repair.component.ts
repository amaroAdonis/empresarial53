import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ScreenStrategy } from './strategies/screen-strategy';
import { Repair } from '../types';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss']
})
export class RepairComponent implements OnInit{

  public title?: string;
  public repairs: Repair[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    private screenStrategy:ScreenStrategy){}
  
  public ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get("orderNum"));
    this.screenStrategy.loadRepair(id)
      .then(resp => this.populateForm(resp));
    this.title = this.screenStrategy.getTitle();
  }

  public alert(): void {
    window.alert("Manutenção adicionada com sucesso!")
  }

  private populateForm(repair:Repair):void {
    this.form.patchValue(repair);
  }

  public form:FormGroup = new FormGroup({
    orderNum: new FormControl(null, [Validators.required]),
    numeroSala: new FormControl(null, [Validators.required]),
    nomeServico: new FormControl(null, [Validators.required]),
    dataServico: new FormControl(null, [Validators.required]),
    valor: new FormControl(null, [Validators.required])
  })

  public submit():void {
    this.screenStrategy.saveRepair(this.form.value);
    this.alert();
  }
}
