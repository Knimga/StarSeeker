/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharClassService } from './char-class.service';

describe('CharClassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharClassService]
    });
  });

  it('should ...', inject([CharClassService], (service: CharClassService) => {
    expect(service).toBeTruthy();
  }));
});
