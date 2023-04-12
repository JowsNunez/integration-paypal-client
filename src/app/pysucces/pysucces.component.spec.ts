import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PysuccesComponent } from './pysucces.component';

describe('PysuccesComponent', () => {
  let component: PysuccesComponent;
  let fixture: ComponentFixture<PysuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PysuccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PysuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
