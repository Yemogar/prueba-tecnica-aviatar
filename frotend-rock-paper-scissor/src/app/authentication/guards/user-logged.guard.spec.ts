import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserLoggedGuard } from './user-logged.guard';

describe('UserLoggedGuard', () => {
  let guard: UserLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    guard = TestBed.inject(UserLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
