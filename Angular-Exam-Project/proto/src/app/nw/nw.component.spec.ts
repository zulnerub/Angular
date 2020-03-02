import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NwComponent } from './nw.component';

describe('NwComponent', () => {
  let component: NwComponent;
  let fixture: ComponentFixture<NwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
