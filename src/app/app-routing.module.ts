import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaCompromissoComponent } from './agenda-compromisso/agenda-compromisso.component';
import { AgendaItemComponent } from './agenda-item/agenda-item.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo : '/home', pathMatch: 'full'},
  {path: 'Agenda', component: AgendaCompromissoComponent},
  {path: 'Agenda/id', component: AgendaItemComponent},
  {path: 'Agendas' ,  component: AgendaItemComponent},
  {path: 'home' ,  component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
