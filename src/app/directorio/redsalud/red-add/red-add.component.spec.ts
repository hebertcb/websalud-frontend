import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedAddComponent } from './red-add.component';

describe('RedAddComponent', () => {
  let component: RedAddComponent;
  let fixture: ComponentFixture<RedAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
