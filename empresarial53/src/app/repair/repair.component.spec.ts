import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairComponent } from './repair.component';

describe('NewRepairComponent', () => {
  let component: RepairComponent;
  let fixture: ComponentFixture<RepairComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepairComponent]
    });
    fixture = TestBed.createComponent(RepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
