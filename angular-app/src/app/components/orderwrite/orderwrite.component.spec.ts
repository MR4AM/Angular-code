import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderwriteComponent } from './orderwrite.component';

describe('OrderwriteComponent', () => {
  let component: OrderwriteComponent;
  let fixture: ComponentFixture<OrderwriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderwriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderwriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
