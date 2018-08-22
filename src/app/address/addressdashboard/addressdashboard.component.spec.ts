import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressdashboardComponent } from './addressdashboard.component';

describe('AddressdashboardComponent', () => {
  let component: AddressdashboardComponent;
  let fixture: ComponentFixture<AddressdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
