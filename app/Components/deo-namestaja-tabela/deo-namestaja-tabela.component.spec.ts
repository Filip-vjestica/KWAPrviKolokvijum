import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoNamestajaTabelaComponent } from './deo-namestaja-tabela.component';

describe('DeoNamestajaTabelaComponent', () => {
  let component: DeoNamestajaTabelaComponent;
  let fixture: ComponentFixture<DeoNamestajaTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoNamestajaTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoNamestajaTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
