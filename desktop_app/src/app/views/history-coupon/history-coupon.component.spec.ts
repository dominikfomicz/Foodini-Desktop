import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCouponComponent } from './history-coupon.component';

describe('HistoryCouponComponent', () => {
  let component: HistoryCouponComponent;
  let fixture: ComponentFixture<HistoryCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
