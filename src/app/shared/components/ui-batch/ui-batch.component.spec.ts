import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBatchComponent } from './ui-batch.component';

describe('UiBatchComponent', () => {
  let component: UiBatchComponent;
  let fixture: ComponentFixture<UiBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiBatchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
