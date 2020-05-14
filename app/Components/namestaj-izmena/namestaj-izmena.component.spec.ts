import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamestajIzmenaComponent } from './namestaj-izmena.component';

describe('NamestajIzmenaComponent', () => {
  let component: NamestajIzmenaComponent;
  let fixture: ComponentFixture<NamestajIzmenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamestajIzmenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamestajIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
