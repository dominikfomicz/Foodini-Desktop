import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCouponComponent } from './check-coupon.component';

describe('CheckCouponComponent', () => {
  let component: CheckCouponComponent;
  let fixture: ComponentFixture<CheckCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
