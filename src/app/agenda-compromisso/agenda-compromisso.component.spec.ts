import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCompromissoComponent } from './agenda-compromisso.component';

describe('AgendaCompromissoComponent', () => {
  let component: AgendaCompromissoComponent;
  let fixture: ComponentFixture<AgendaCompromissoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgendaCompromissoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaCompromissoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
