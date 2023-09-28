import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacredTextsComponent } from './sacred-texts.component';

describe('SacredTextsComponent', () => {
  let component: SacredTextsComponent;
  let fixture: ComponentFixture<SacredTextsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SacredTextsComponent]
    });
    fixture = TestBed.createComponent(SacredTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
