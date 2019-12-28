import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import {LoginComponent} from './login/login.component';
import {CourseComponent} from './course/course.component';
import {AddCourseComponent} from './course/add-course.component';
import {UpdateCourseComponent} from './course/update-course.component';
import {StudentMenuComponent} from './student-menu/student-menu.component';
import {UserRoleComponent} from './user-role/user-role.component';
import {RoleMenuComponent} from './role-menu/role-menu.component';
import {CkeditorComponent} from './ckeditor/ckeditor.component';
import {ChartsComponent} from './charts/charts.component';
const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  // {path: 'logout', component: LogoutComponent},
      {path: 'index', component: IndexComponent, children: [
      {path: 'course', component: CourseComponent},
      {path: 'course/addCourse', component: AddCourseComponent},
      {path: 'course/updateCourse/:id', component: UpdateCourseComponent},
      {path: 'studentMenu', component: StudentMenuComponent},
      {path: 'userRole', component: UserRoleComponent},
      {path: 'roleMenu', component: RoleMenuComponent},
      {path: 'ckeditor', component: CkeditorComponent},
      {path: 'charts', component: ChartsComponent}
    ]},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
