import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamestajTabelaComponent } from './namestaj-tabela.component';

describe('NamestajTabelaComponent', () => {
  let component: NamestajTabelaComponent;
  let fixture: ComponentFixture<NamestajTabelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamestajTabelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamestajTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
