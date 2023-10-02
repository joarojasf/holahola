import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClaseregistradaPage } from './claseregistrada.page';

describe('ClaseregistradaPage', () => {
  let component: ClaseregistradaPage;
  let fixture: ComponentFixture<ClaseregistradaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClaseregistradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
