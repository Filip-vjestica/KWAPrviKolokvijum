import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoTabelaComponent } from './deo-tabela.component';

describe('DeoTabelaComponent', () => {
  let component: DeoTabelaComponent;
  let fixture: ComponentFixture<DeoTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
