import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamestajDetaljiComponent } from './namestaj-detalji.component';

describe('NamestajDetaljiComponent', () => {
  let component: NamestajDetaljiComponent;
  let fixture: ComponentFixture<NamestajDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamestajDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamestajDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
