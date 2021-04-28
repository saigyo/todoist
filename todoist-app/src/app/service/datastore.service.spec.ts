import { TestBed } from '@angular/core/testing';

import { Datastore } from './datastore.service';

describe('DatastoreService', () => {
  let service: Datastore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datastore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
