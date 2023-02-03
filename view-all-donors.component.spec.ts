import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDonorsComponent } from './view-all-donors.component';

describe('ViewAllDonorsComponent', () => {
  let component: ViewAllDonorsComponent;
  let fixture: ComponentFixture<ViewAllDonorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllDonorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllDonorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
