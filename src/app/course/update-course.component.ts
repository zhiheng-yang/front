import { Component, OnInit } from '@angular/core';
import {College, Course,  CourseType} from '../entity';
import {CourseService} from '../course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {
  courseTypes: CourseType[];
  colleges: College[];
  course: Course;
  constructor(private route: ActivatedRoute, private bysjService: CourseService, private location: Location) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.bysjService.getCourse(id).subscribe( res =>  this.course = res );
    this.bysjService.getCourseTypes().subscribe( res => this.courseTypes = res);
    this.bysjService.getColleges().subscribe( res => this.colleges = res);
  }
  goBack(): void {
    this.location.back();
  }
  save() {
    this.bysjService.updateCourse(this.course).subscribe(
      (res) => {
        alert(res.message);
        this.goBack();
      }
    );
  }
  compareFn(o1: Course, o2: Course): boolean {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
