import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmeritComponent } from './addmerit.component';

describe('AddmeritComponent', () => {
  let component: AddmeritComponent;
  let fixture: ComponentFixture<AddmeritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddmeritComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddmeritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
