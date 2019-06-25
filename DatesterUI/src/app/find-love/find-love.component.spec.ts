import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLoveComponent } from './find-love.component';

describe('FindLoveComponent', () => {
  let component: FindLoveComponent;
  let fixture: ComponentFixture<FindLoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
