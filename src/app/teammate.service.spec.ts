/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeammateService } from './teammate.service';

describe('TeammateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeammateService]
    });
  });

  it('should ...', inject([TeammateService], (service: TeammateService) => {
    expect(service).toBeTruthy();
  }));
});
