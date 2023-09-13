import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevOfCodesComponent } from './dev-of-codes.component';

describe('DevOfCodesComponent', () => {
  let component: DevOfCodesComponent;
  let fixture: ComponentFixture<DevOfCodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevOfCodesComponent]
    });
    fixture = TestBed.createComponent(DevOfCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
