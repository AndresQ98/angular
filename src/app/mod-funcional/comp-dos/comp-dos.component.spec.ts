import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDosComponent } from './comp-dos.component';

describe('CompDosComponent', () => {
  let component: CompDosComponent;
  let fixture: ComponentFixture<CompDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
