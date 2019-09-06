import { TestBed } from '@angular/core/testing';

import { NgxAuthenticationService } from './ngx-authentication.service';

describe('NgxAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAuthenticationService = TestBed.get(NgxAuthenticationService);
    expect(service).toBeTruthy();
  });
});
