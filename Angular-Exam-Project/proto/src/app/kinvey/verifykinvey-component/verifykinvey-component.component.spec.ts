import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifykinveyComponentComponent } from './verifykinvey-component.component';

describe('VerifykinveyComponentComponent', () => {
  let component: VerifykinveyComponentComponent;
  let fixture: ComponentFixture<VerifykinveyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifykinveyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifykinveyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
