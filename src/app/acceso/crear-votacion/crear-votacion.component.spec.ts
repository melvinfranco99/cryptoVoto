import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVotacionComponent } from './crear-votacion.component';

describe('CrearVotacionComponent', () => {
  let component: CrearVotacionComponent;
  let fixture: ComponentFixture<CrearVotacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearVotacionComponent]
    });
    fixture = TestBed.createComponent(CrearVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
