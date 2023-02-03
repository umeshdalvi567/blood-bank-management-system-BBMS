import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logout1Component } from './logout1.component';

describe('Logout1Component', () => {
  let component: Logout1Component;
  let fixture: ComponentFixture<Logout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Logout1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
