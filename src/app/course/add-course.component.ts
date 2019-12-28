import { Component, OnInit } from '@angular/core';
import {College, Course, Course1, CourseType } from '../entity';
import {CourseService} from '../course.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  courseTypes: CourseType[];
  colleges: College[];
  courseType: CourseType;
  college: College;
  course: Course1;

  constructor(private bysjService: CourseService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getCourseTypes();
    this.getColleges();
  }
  getCourseTypes() {
    this.bysjService.getCourseTypes().subscribe( res => this. courseTypes = res);
  }
  getCourseType(id: number) {
    this.bysjService.getCourseType(id).subscribe( res => this.courseType = res);
  }
  getColleges() {
    this.bysjService.getColleges().subscribe(res => this.colleges = res);
  }
  getCollege(id: number) {
    this.bysjService.getCollege(id).subscribe( res => this.college = res);
  }
  goBack() {
    this.location.back();
  }
  save(courseNo: string, name: string, credit: number,
       remarks: string, classHour: number, examWeek: number, courseType: CourseType, college: College): void {
    // tslint:disable-next-line:max-line-length
    this.course = {courseNo: courseNo.trim(), name: name.trim(), credit: Number(credit), remarks: remarks.trim(), classHour: Number(classHour), examWeek: Number(examWeek),
      courseType: this.courseType, college: this.college,
      };
    if (!name || !courseNo) { return; }
    this.bysjService.addCourse(this.course).subscribe(
      (res) => {
        alert(res.message);
        this.goBack();
      }
    );
  }
}
