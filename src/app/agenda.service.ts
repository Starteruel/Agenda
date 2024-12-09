import { AgendaCompromissoComponent } from './agenda-compromisso/agenda-compromisso.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendacomp } from './Agenda';


@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private url = 'http://localhost:8080/agenda';

  constructor(private http:HttpClient) { }
getAgendas(): Observable<Agendacomp []>{
  return this.http.get<Agendacomp []>(this.url);
}

getAgendasById(id:number): Observable<Agendacomp >{
  return this.http.get<Agendacomp >( `${this.url}/${id}`);
}

 delete(Agenda:Agendacomp): Observable<void>{
  return this.http.delete<void>(`${this.url}/${Agenda.id}`);
 }

 update(Agenda:Agendacomp): Observable<Agendacomp>{
  return this.http.put<Agendacomp>(`${this.url}/${Agenda.id}`, Agenda);
}

save(Agenda:Agendacomp): Observable<Agendacomp>{
  return this.http.post<Agendacomp>(this.url, Agenda);
}

}
