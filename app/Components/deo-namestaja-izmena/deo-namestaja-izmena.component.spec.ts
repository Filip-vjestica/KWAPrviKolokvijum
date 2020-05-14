import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoNamestajaIzmenaComponent } from './deo-namestaja-izmena.component';

describe('DeoNamestajaIzmenaComponent', () => {
  let component: DeoNamestajaIzmenaComponent;
  let fixture: ComponentFixture<DeoNamestajaIzmenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoNamestajaIzmenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoNamestajaIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
