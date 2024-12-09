import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  url = 'http://localhost:8080/agenda';

  constructor(private http:HttpClient) { }
getAgendas(): Observable<Agenda []>{
  return this.http.get<Agenda []>(this.url);
}

getAgendasById(id:number): Observable<Agenda >{
  return this.http.get<Agenda >( `${this.url}/${id}`);
}

 delete(Agenda:Agenda): Observable<void>{
  return this.http.delete<void>(`${this.url}/${Agenda.id}`);
 }

 update(Agenda:Agenda): Observable<Agenda>{
  return this.http.put<Agenda>(`${this.url}/${Agenda.id}`, Agenda);
}

save(Agenda:Agenda): Observable<Agenda>{
  return this.http.post<Agenda>(this.url, Agenda);
}

}
