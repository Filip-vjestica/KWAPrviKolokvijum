import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoDetaljiComponent } from './deo-detalji.component';

describe('DeoDetaljiComponent', () => {
  let component: DeoDetaljiComponent;
  let fixture: ComponentFixture<DeoDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
