import { Component, OnInit } from '@angular/core';
import {DynamicMenu, Menu, MenusRole, Role} from '../entity';
import {CourseService} from '../course.service';
// import {UserService} from '../user.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  id = window.localStorage.getItem('user');
  dynamicMenus: MenusRole[];
  name = window.localStorage.getItem('name');
  // show = -1;
  // controller = '展开';

  constructor(private indexService: CourseService) {
  }
  ngOnInit() {
    this.getRoleAndMenus(this.id);
  }
  getRoleAndMenus(id): void {
    this.indexService.getRoleMenu(id).subscribe(
      res => this.dynamicMenus = res);
  }
  // exchange() {
  //   if (this.controller === '展开') {
  //     this.controller = '收起';
  //   } else {
  //     this.controller = '展开';
  //   }
  // }
}
