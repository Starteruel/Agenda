import { agendacomp } from './../Agenda';
import { Router } from '@angular/router';
import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agenda-compromisso',
  templateUrl: './agenda-compromisso.component.html',
  styleUrl: './agenda-compromisso.component.css'
})
export class AgendaCompromissoComponent implements OnInit{
  Agenda: agendacomp[] = [];



  constructor(private service: AgendaService, private router: Router){}

  ngOnInit(): void {
     this.LoadAgenda();
  }

  LoadAgenda() {
    this.service.getAgenda().subscribe({
      next: data => this.Agenda = data
      }
    );
   }
     delete(Agenda: agendacomp){
       this.service.delete(Agenda).subscribe({
          next: () => this.LoadAgenda()
       })
    }
      create(){
        this.router.navigate(['Agenda']);
      }

}
