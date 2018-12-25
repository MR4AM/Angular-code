import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightnavComponent } from './rightnav.component';

describe('RightnavComponent', () => {
  let component: RightnavComponent;
  let fixture: ComponentFixture<RightnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
