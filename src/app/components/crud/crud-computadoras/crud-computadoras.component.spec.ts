import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudComputadorasComponent } from './crud-computadoras.component';

describe('CrudComputadorasComponent', () => {
  let component: CrudComputadorasComponent;
  let fixture: ComponentFixture<CrudComputadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudComputadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudComputadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
