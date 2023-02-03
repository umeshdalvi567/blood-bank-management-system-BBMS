import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addnew1Component } from './addnew1.component';

describe('Addnew1Component', () => {
  let component: Addnew1Component;
  let fixture: ComponentFixture<Addnew1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Addnew1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addnew1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
