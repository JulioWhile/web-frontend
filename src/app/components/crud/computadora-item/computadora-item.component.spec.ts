import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadoraItemComponent } from './computadora-item.component';

describe('ComputadoraItemComponent', () => {
  let component: ComputadoraItemComponent;
  let fixture: ComponentFixture<ComputadoraItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputadoraItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadoraItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
