import { Component, OnInit } from '@angular/core';
import {Course} from '../entity';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  private courses: Course[];

  constructor(private courseService: CourseService) { }
  ngOnInit() {
    this.getCourses();
  }
  getCourses(): void {
    this.courseService.getCourses().subscribe(res =>  this.courses = res);
  }
  getCourseByname(name: string): void {
    this.courseService.getCourseByname(name).subscribe(res =>  this.courses = res);
}
  ifName(name: string): void {
    if (name) {
      this.courses.splice(0, this.courses.length);
      this.getCourseByname(name);
    } else {
      this.getCourses();
    }
  }
  delete(course: Course | number): void {
    this.courses = this.courses.filter(h => h !== course);
    this.courseService.deleteCourse(course).subscribe( res => alert(res.message));
  }
}
