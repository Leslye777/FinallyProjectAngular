import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/features/students/services/students.service';
import { NgForm } from '@angular/forms';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: boolean = false;
  imagePath = '/assets/imagens/fundo.png'



  constructor(private studentService: StudentsService,
              private router: Router) { }

  ngOnInit(): void {
  
  }

  validateUser(loginForm: NgForm) {
    const data = loginForm.value;
    const student = this.studentService.getStudentByEmailAndPassword(data.email, data.password);
    if(!student) {
      console.log('erro')
      return this.error = true;
    }
    sessionStorage.setItem('student', JSON.stringify(student)!);


 


    return this.router.navigateByUrl('students');
  }



}
