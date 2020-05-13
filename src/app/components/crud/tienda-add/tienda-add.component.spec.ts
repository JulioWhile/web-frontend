import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaAddComponent } from './tienda-add.component';

describe('TiendaAddComponent', () => {
  let component: TiendaAddComponent;
  let fixture: ComponentFixture<TiendaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiendaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiendaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
