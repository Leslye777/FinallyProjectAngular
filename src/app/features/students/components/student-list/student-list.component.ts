import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  constructor(private studantService: StudentsService) { }

  dataTable:any;
  currentProfile: any;
  nomeBusca: any;
  matriculaBusca: any;

  ngOnInit(): void {
    this.dataTable = this.studantService.getStudents();
    console.log(this.dataTable);
    
  }

  abrirPerfil(perfil:any):void{
    console.log(perfil);
    console.log(this.dataTable);
  }

  abrirModal(data: any){
    this.currentProfile = data;
  }

  buscaPorNome(nome:any){   
    this.dataTable = this.studantService.getStudentsByFilterName(nome);
  }

  removeStudent(id: number) {
    const studentIndex = this.dataTable.findIndex((student:any) => student.id === Number(id));
    this.dataTable.splice(studentIndex, 1);
  }

}
