import { Agendacomp } from './../Agenda';
import { Router } from '@angular/router';
import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agenda-compromisso',
  templateUrl: './agenda-compromisso.component.html',
  styleUrl: './agenda-compromisso.component.css'
})
export class AgendaCompromissoComponent implements OnInit{
  Agenda: Agendacomp[] = [];
Agendacomps: any;

  constructor(private service: AgendaService, private router: Router){}

  ngOnInit(): void {
     this.LoadAgendacomp();
  }

  LoadAgendacomp() {
    this.service.getAgendas().subscribe({
      next: data => this.Agendacomps = data
      }
    );
   }
     delete(Agenda: Agendacomp){
       this.service.delete(Agenda).subscribe({
          next: () => this.LoadAgendacomp()
       })
    }
      create(){
        this.router.navigate(['agenda']);
      }

}
