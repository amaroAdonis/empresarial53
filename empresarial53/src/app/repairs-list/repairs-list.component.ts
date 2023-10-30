import { Component, OnInit, PipeTransform } from '@angular/core';
import { Repair } from '../types';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, debounceTime, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-repairs-list',
  templateUrl: './repairs-list.component.html',
  styleUrls: ['./repairs-list.component.scss']
})
export class RepairsListComponent implements OnInit {

  public repairs:Repair[] = [];
  public filtered:Repair[] = [];
  //public repairs$: Observable<Repair[]>;
  public filter = new FormControl('');

  constructor(private http:HttpClient, private router:Router, pipe:DecimalPipe){
    // this.repairs$ = this.filter.valueChanges.pipe(startWith(''), map((text) => search(text, pipe)),
    // );
    this.filter.valueChanges
      .pipe(debounceTime(500))
      .subscribe(v => this.search(v));
  }

  private search(value:string|null):void {
    if (value) {
    	this.filtered = this.repairs.filter(r => {
        Object.keys(r).find(columnName => {
          type RepairField = keyof Repair;
          const columnValue = r[<RepairField>columnName];
          if (columnValue) {
            console.log("columnname", columnName);
            return columnValue.toString().indexOf(value) >= 0;
          }
          return false;
        })
      });
    } else {
      this.filtered = this.repairs;
    }
  }

  public ngOnInit(): void {
    this.LoadRepairs();
  }

  public refresh(): void {
    window.location.reload();
}

  public LoadRepairs():void {
    this.http.get<Repair[]>(`api/manutencao`)
    .subscribe(response => this.onLoadRepairs(response))
  }

  private onLoadRepairs(response:Repair[]):void {
    this.repairs = response;
    this.search(null);
  }

  public delete(index:number):void {
    const repair = this.repairs[index];
    this.http.delete(`api/manutencao/${repair.orderNum}`)
      .subscribe(repair => console.log(repair));
    this.refresh();
  }

  public edit(index:number):void {
    const repair = this.repairs[index];
    this.router.navigateByUrl(`/manutencao/${repair.orderNum}`)
  }
}
