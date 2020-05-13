import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTiendasComponent } from './crud-tiendas.component';

describe('CrudTiendasComponent', () => {
  let component: CrudTiendasComponent;
  let fixture: ComponentFixture<CrudTiendasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTiendasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTiendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
