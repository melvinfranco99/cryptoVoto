import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstedHaVotadoComponent } from './usted-ha-votado.component';

describe('UstedHaVotadoComponent', () => {
  let component: UstedHaVotadoComponent;
  let fixture: ComponentFixture<UstedHaVotadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UstedHaVotadoComponent]
    });
    fixture = TestBed.createComponent(UstedHaVotadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
