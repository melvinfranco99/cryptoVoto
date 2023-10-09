import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoVotacionComponent } from './codigo-votacion.component';

describe('CodigoVotacionComponent', () => {
  let component: CodigoVotacionComponent;
  let fixture: ComponentFixture<CodigoVotacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodigoVotacionComponent]
    });
    fixture = TestBed.createComponent(CodigoVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
