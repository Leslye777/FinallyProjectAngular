import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';
import { StudentPageComponent } from './pages/student-page/student-page.component';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { FormsModule }   from '@angular/forms';




@NgModule({
  declarations: [
    StudentListComponent,
    StudentComponent,
    StudentPageComponent,
    StudentDetailsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule
  ]
})
export class StudentsModule { }
