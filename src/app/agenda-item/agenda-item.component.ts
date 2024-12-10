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
 const id = Number(this.activeRoute.snapshot.paramMap.get("id"));
 if(id != 0){
  this.isEditing=true;
  this.loadAgenda(id);
 }
}
loadAgenda(id: number) {
 this.service.getAgendaById(id).subscribe({
  next: data => this.FormGroupAgenda.setValue(data)
 });
}

update(){
 this.service.update(this.FormGroupAgenda.value).subscribe({
   next: () => this.router.navigate(['Agenda'])
 });
}


save(){
 this.service.save(this.FormGroupAgenda.value).subscribe({
   next: () => this.router.navigate(['Agenda/id'])
 });
}

}
