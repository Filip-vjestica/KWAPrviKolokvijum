import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeoIzmenaComponent } from './deo-izmena.component';

describe('DeoIzmenaComponent', () => {
  let component: DeoIzmenaComponent;
  let fixture: ComponentFixture<DeoIzmenaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeoIzmenaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeoIzmenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
