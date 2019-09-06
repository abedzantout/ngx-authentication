import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthenticationComponent } from './ngx-authentication.component';

describe('NgxAuthenticationComponent', () => {
  let component: NgxAuthenticationComponent;
  let fixture: ComponentFixture<NgxAuthenticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxAuthenticationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
