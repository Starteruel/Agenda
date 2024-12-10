import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AgendaService } from '../agenda.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agenda-item',
  templateUrl: './agenda-item.component.html',
  styleUrl: './agenda-item.component.css'
})
export class AgendaItemComponent implements OnInit{

  FormGroupAgenda: FormGroup;
  isEditing: boolean = false;

  constructor(private router: Router,
    private activeRoute: ActivatedRoute,
    private service: AgendaService,
    private formBuilder: FormBuilder
){
  this.FormGroupAgenda = formBuilder.group({
    id: [''],
    name: [''],
    days1: [''],
    hours2: [''],
    location3: ['']

 });

}
ngOnInit() {
  // Inscreva-se para observar as mudanças nos parâmetros da rota
  this.activeRoute.paramMap.subscribe(params => {
    const id = Number(params.get('id'));  // ID da URL
    console.log('ID recuperado:', id);

    if (id !== 0 && id) {
      this.isEditing = true;
      this.loadAgenda(id);  // Carregar os dados da agenda
    }
  });
}

loadAgenda(id: number) {
  console.log('Carregando dados da agenda com id:', id);  // Verifique se está sendo chamado
  this.service.getAgendaById(id).subscribe({
    next: (data) => {
      console.log('Dados recebidos:', data);  // Verifique os dados recebidos
      this.FormGroupAgenda.setValue({
        id: data.id,
        name: data.name,
        days1: data.days1,
        hours2: data.hours2,
        location3: data.location3
      });  // Preencher o formulário
    },
    error: (err) => {
      console.error('Erro ao carregar agenda:', err);
    }
  });
}


update(){
 this.service.update(this.FormGroupAgenda.value).subscribe({
   next: () => {
    const id = this.FormGroupAgenda.value.id;
    this.router.navigate([`/Agendas/Agenda/${id}`])
    }
 });
}

save(){
 this.service.save(this.FormGroupAgenda.value).subscribe({
   next: (data) => {
    this.router.navigate([`/Agendas/Agenda/${data.id}`])
 }
 });
}

}
