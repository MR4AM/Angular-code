import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostserverComponent } from './hostserver.component';

describe('HostserverComponent', () => {
  let component: HostserverComponent;
  let fixture: ComponentFixture<HostserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
