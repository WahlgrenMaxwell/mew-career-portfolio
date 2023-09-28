import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacredTextComponent } from './sacred-text.component';

describe('SacredTextComponent', () => {
  let component: SacredTextComponent;
  let fixture: ComponentFixture<SacredTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SacredTextComponent]
    });
    fixture = TestBed.createComponent(SacredTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
