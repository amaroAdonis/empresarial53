import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractGeneratorComponent } from './contract-generator.component';

describe('ContractGeneratorComponent', () => {
  let component: ContractGeneratorComponent;
  let fixture: ComponentFixture<ContractGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractGeneratorComponent]
    });
    fixture = TestBed.createComponent(ContractGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
