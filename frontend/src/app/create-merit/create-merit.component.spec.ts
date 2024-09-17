import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMeritComponent } from './create-merit.component';

describe('CreateMeritComponent', () => {
  let component: CreateMeritComponent;
  let fixture: ComponentFixture<CreateMeritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMeritComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateMeritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
