import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccederVotacionComponent } from './acceder-votacion.component';

describe('AccederVotacionComponent', () => {
  let component: AccederVotacionComponent;
  let fixture: ComponentFixture<AccederVotacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccederVotacionComponent]
    });
    fixture = TestBed.createComponent(AccederVotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
