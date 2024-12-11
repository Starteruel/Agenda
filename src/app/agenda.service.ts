import { AgendaCompromissoComponent } from './agenda-compromisso/agenda-compromisso.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { agendacomp } from './Agenda';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url = 'https://api.agendastart.duckdns.org/agenda';


  constructor(private http:HttpClient) { }
getAgenda(): Observable<agendacomp []>{
  return this.http.get<agendacomp []>(this.url);
}

getAgendaById(id:number): Observable<agendacomp >{
  return this.http.get<agendacomp >( `${this.url}/${id}`);
}

 delete(Agenda:agendacomp): Observable<void>{
  return this.http.delete<void>(`${this.url}/${Agenda.id}`);
 }

 update(Agenda:agendacomp): Observable<agendacomp>{
  return this.http.put<agendacomp>(`${this.url}/${Agenda.id}`, Agenda);
}

save(Agenda:agendacomp): Observable<agendacomp>{
  return this.http.post<agendacomp>(this.url, Agenda);
}

}
