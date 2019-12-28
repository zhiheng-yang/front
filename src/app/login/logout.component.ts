import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private universityService: CourseService) {}

  ngOnInit() {
    this.logout();
  }
  logout() {
    this.universityService.logOut().subscribe(res => alert(res.message));
  }

}
