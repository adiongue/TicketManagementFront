import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorAccountComponent } from './operator-account.component';

describe('OperatorAccountComponent', () => {
  let component: OperatorAccountComponent;
  let fixture: ComponentFixture<OperatorAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatorAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
