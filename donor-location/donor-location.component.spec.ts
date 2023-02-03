import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorLocationComponent } from './donor-location.component';

describe('DonorLocationComponent', () => {
  let component: DonorLocationComponent;
  let fixture: ComponentFixture<DonorLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonorLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
