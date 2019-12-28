import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CourseService } from '../course.service';
declare var $: any;
import {Teacher, User} from '../entity';

@Component({
  selector: 'app-login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User;
  private uname: string;
  private password: string;
  userName: string;

  constructor(private router: Router, private loginService: CourseService) { }

  ngOnInit() { // 组件被创建

  }
  login(un: string, up: string) { // 登录跳转页面
    this.uname = un;
    this.password = up;
    this.loginService.checkUser({username: this.uname, password: this.password})
      .subscribe((res) => {
        if (this.userName === null || this.password === null) {
          alert( '请输入账号或密码' );
        } else if (res.message) {
          alert(res.message);
        } else {
          window.localStorage.setItem('user', res.id);
          window.localStorage.setItem('name', res.actor.name);
          this.router.navigateByUrl('/index');
        }
      });
  }
}
