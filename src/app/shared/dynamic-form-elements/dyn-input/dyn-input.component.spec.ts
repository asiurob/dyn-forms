import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynInputComponent } from './dyn-input.component';

describe('DynInputComponent', () => {
  let component: DynInputComponent;
  let fixture: ComponentFixture<DynInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
