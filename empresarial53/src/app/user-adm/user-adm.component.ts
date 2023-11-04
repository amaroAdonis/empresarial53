import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../types';
import { ScreenStrategy } from './strategies/screen-strategy';

@Component({
  selector: 'user-adm',
  templateUrl: './user-adm.component.html',
  styleUrls: ['./user-adm.component.scss']
})
export class UserAdmComponent implements OnInit {

  public title?:string;

  public userList:User[] = [];

  constructor (
    private activetedRoute: ActivatedRoute,
    private screenStrategy: ScreenStrategy
  ) {}

  ngOnInit(): void {
    const id = this.activetedRoute.snapshot.paramMap.get("email") ?? undefined;
    this.screenStrategy.loadUser(id).then(resp => this.populateForm(resp));
    this.title = this.screenStrategy.getTitle();
  }

  private populateForm(user: User): void {
    this.form.patchValue(user);
  }

  public refresh(): void {
    window.location.reload();
}

  public alert(): void {
    window.alert("User Adcionado com sucesso!")
    this.refresh();
}

  public form: FormGroup = new FormGroup({
    email: new FormControl (null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    orderNum: new FormControl(null)
  })

  public submit() {
    this.screenStrategy.saveUser(this.form.value)
    this.alert();
  }
 
}
