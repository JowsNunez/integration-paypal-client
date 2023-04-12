import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyerrorComponent } from './pyerror.component';

describe('PyerrorComponent', () => {
  let component: PyerrorComponent;
  let fixture: ComponentFixture<PyerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PyerrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PyerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
