import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss']
})
export class RepairComponent implements OnInit{

  constructor(){}
  
  public ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public form:FormGroup = new FormGroup({
    
  })

  

}
