import { TestBed } from '@angular/core/testing';

import { Recipe.ServiceService } from './recipe.service';

describe('Recipe.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Recipe.ServiceService = TestBed.get(Recipe.ServiceService);
    expect(service).toBeTruthy();
  });
});
