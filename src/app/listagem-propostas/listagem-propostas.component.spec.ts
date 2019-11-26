import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPropostasComponent } from './listagem-propostas.component';

describe('ListagemPropostasComponent', () => {
  let component: ListagemPropostasComponent;
  let fixture: ComponentFixture<ListagemPropostasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPropostasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPropostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
