import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaResultadosComponent } from './grafica-resultados.component';

describe('GraficaResultadosComponent', () => {
  let component: GraficaResultadosComponent;
  let fixture: ComponentFixture<GraficaResultadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaResultadosComponent]
    });
    fixture = TestBed.createComponent(GraficaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
