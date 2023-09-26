import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ScreenStrategy } from './strategies/screen-strategy';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss']
})
export class RepairComponent implements OnInit{

  constructor(
    private activatedRoute:ActivatedRoute,
    private screenStrategy:ScreenStrategy,
  ){}
  
  public ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public form:FormGroup = new FormGroup({
    
  })

  

}
