import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import {LoginComponent} from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { CourseComponent } from './course/course.component';
import { UpdateCourseComponent } from './course/update-course.component';
import { CollegeComponent } from './college/college.component';
import { CourseTypeComponent } from './course-type/course-type.component';
import {AddCourseComponent} from './course/add-course.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import {UserRoleComponent} from './user-role/user-role.component';
import { RoleMenuComponent } from './role-menu/role-menu.component';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import {CKEditorModule} from 'ng2-ckeditor';
import { ChartsComponent } from './charts/charts.component';

declare var require: any;

declare var $: any;


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    LogoutComponent,
    CourseComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    CollegeComponent,
    CourseTypeComponent,
    StudentMenuComponent,
    UserRoleComponent,
    RoleMenuComponent,
    CkeditorComponent,
    ChartsComponent,
  ],
  imports: [ // 当前项目依赖的所有模块
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // 如果要引入双向绑定，则需要引入FormModule
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ],
  // 定义服务
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy,
    // provide: HighchartsStatic
  }],
  // providers: [ HighchartsStatic],
  // 默认启动哪个组件
  bootstrap: [AppComponent]
})
export class AppModule { }
