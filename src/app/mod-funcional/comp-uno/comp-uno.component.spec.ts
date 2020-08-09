import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompUnoComponent } from './comp-uno.component';

describe('CompUnoComponent', () => {
  let component: CompUnoComponent;
  let fixture: ComponentFixture<CompUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
