import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegiComponent } from './admin-regi.component';

describe('AdminRegiComponent', () => {
  let component: AdminRegiComponent;
  let fixture: ComponentFixture<AdminRegiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRegiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRegiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
