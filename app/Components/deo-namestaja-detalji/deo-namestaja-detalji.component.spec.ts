import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoNamestajaDetaljiComponent } from './deo-namestaja-detalji.component';

describe('DeoNamestajaDetaljiComponent', () => {
  let component: DeoNamestajaDetaljiComponent;
  let fixture: ComponentFixture<DeoNamestajaDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoNamestajaDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoNamestajaDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
