import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedonorComponent } from './deletedonor.component';

describe('DeletedonorComponent', () => {
  let component: DeletedonorComponent;
  let fixture: ComponentFixture<DeletedonorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedonorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletedonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
