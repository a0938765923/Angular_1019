import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpInfoComponentComponent } from './emp-info-component.component';

describe('EmpInfoComponentComponent', () => {
  let component: EmpInfoComponentComponent;
  let fixture: ComponentFixture<EmpInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
