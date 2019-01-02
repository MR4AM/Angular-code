import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerloginComponent } from './mangerlogin.component';

describe('MangerloginComponent', () => {
  let component: MangerloginComponent;
  let fixture: ComponentFixture<MangerloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
