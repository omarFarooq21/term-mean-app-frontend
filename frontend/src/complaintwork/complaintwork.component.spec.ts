import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintworkComponent } from './complaintwork.component';

describe('ComplaintworkComponent', () => {
  let component: ComplaintworkComponent;
  let fixture: ComponentFixture<ComplaintworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplaintworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
