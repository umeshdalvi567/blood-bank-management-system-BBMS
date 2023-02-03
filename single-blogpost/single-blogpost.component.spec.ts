import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBlogpostComponent } from './single-blogpost.component';

describe('SingleBlogpostComponent', () => {
  let component: SingleBlogpostComponent;
  let fixture: ComponentFixture<SingleBlogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBlogpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
