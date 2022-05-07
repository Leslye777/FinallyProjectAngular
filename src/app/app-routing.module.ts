import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/pages/login/login.component';
import { StudentDetailsComponent } from './features/students/pages/student-details/student-details.component';
import { StudentPageComponent } from './features/students/pages/student-page/student-page.component';


const routes: Routes = [
  {path: '', redirectTo: 'students', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'students', component:StudentPageComponent},
  {path: 'student-details', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
