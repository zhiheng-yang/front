import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {Student, Student1} from '../entity';

@Component({
  selector: 'app-student-menu',
  templateUrl: './student-menu.component.html',
  styleUrls: ['./student-menu.component.css']
})
export class StudentMenuComponent implements OnInit {
  id = window.localStorage.getItem('user');
  students: Student1[];
  constructor(private teacherSerivce: CourseService) { }

  ngOnInit() {
    this.getStudentMenu(this.id);
  }
  getStudentMenu(id): void {
    this.teacherSerivce.getStudentMenuByTeacher(id).subscribe(res => this.students = res);
  }
}
