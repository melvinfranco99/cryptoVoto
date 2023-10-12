import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesechosComponent } from './desechos.component';

describe('DesechosComponent', () => {
  let component: DesechosComponent;
  let fixture: ComponentFixture<DesechosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesechosComponent]
    });
    fixture = TestBed.createComponent(DesechosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
