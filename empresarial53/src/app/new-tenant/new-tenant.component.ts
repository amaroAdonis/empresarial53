import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-tenant',
  templateUrl: './new-tenant.component.html',
  styleUrls: ['./new-tenant.component.scss']
})
export class NewTenantComponent implements OnInit {

  
  
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public form: FormGroup = new FormGroup ({

    id: new FormControl(null),
    roomNumber: new FormControl(null, [Validators.required]),
    category: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    image1: new FormControl(null, [Validators.required]),
    image2: new FormControl(null, [Validators.required]),
    image3: new FormControl(null, [Validators.required]),
    image4: new FormControl(null, [Validators.required]),
    delivery: new FormControl(null, [Validators.required]),

  })





}
