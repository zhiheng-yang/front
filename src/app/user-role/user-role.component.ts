import { Component, OnInit } from '@angular/core';
import {UserRoleMenuService} from '../userRoleMenu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SimplifiedRoleAllocation} from '../entity';
declare var $: any;

@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  private userRoles: any[];
  // private popdiv: boolean;
  private userRole: any;
  private simUR: SimplifiedRoleAllocation;
  // roleIds: number[];
  constructor(private userRoleService: UserRoleMenuService) { }
  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions
    // $(function() {
    //   $( '#addModal' ).draggable();
    //   // alert('1111');
    // });
    console.log(this.userRoleService.getUserRole());
    this.getUserRole();
    // this.popdiv = false; // 所有角色的div是否显示
  }
  getUserRole(): void {
    console.log(this.userRoles);
    this.userRoleService.getUserRole().subscribe(res =>  {this.userRoles = res,
      this.userRole = this.userRoles[0];
    });
}
  // 点击某个用户的分配角色按钮
  updateUserRole(uRole: any): void {
    this.userRole = uRole;
    // this.popdiv = true; // 弹出角色分配框
  }
  // 改变复选框的勾选
  changeCheck(value: boolean, key: number) {
     this.userRole.roleAllocationStatusSet[key].allocated = value;
  }
  saveUserRole() {
    const arr = new Array(0);
    // 配置用户拥有的角色
    // tslint:disable-next-line:forin
    for (const i in this.userRole.roleAllocationStatusSet) {
      // tslint:disable-next-line:no-unused-expression
      if (this.userRole.roleAllocationStatusSet[i].allocated === true) {
        // alert(this.userRole.roleAllocationStatusSet[i].id);
        arr.push(this.userRole.roleAllocationStatusSet[i].role.id);
        console.log(this.userRole.roleAllocationStatusSet[i].role.id);
      }
    }
    // @ts-ignore
    this.simUR = {userId: this.userRole.user.id, roleIds: arr};
    console.log(this.simUR);
    this.userRoleService.updateUserRole(this.simUR).subscribe(res => {
          alert(res.message); // 弹出后台给的消息
    });
  }
  // hidediv() {
  //   this.popdiv = false;
  //   // @ts-ignore
  //
  // }
  delete(user: any): void {
    this.userRoles = this.userRoles.filter(h => h !== user);
    // this.userroleService.deleteUser(user).subscribe(res =>{
    //  alert(res.message); // 弹出后台给的消息
    // });
  }

  drag(): void {
      // @ts-ignore
    // $('#myModal').draggable();
  }
  filter(): void {
    // console.log($('#filterName').val());
    $('table tr').hide()
      .filter(':contains(\'' + ($('#filterName').val()) + '\')')
      .show();
    $('#doNotHide').show();
  }
}
