export class Response {
  message: string;
}
export class Menu {
  id: number;
  description: string;
  no: string;
  url: string;
}

export class DynamicMenu {
  menusRole: MenusRole[];
}
export class MenusRole {
  menus: Menu[];
  role: Role;
}
export class Teacher {
  actor: Actor;
  TeacherNo: string;
  degree: Degree;
  department: Department;
  title: Title;
}


export class Student {
  actor: Actor;
  studentNo: string;
  department: Department;
}
export class Administrator {
  actor: Actor;
  administratorNo: string;
}
export class Title {
  id: number;
  no: string;
  description: string;
}
export class Degree {
  id: number;
  no: string;
  description: string;
}
export class Department {
  id: number;
  no: string;
  name: string;
  college: College;
}
export class User {
  id: number;
  username: string;
  password: string;
  actor: Actor;
}
export class Student1 {
  id: number;
  studentNo: string;
  name: string;
  iDCard: string;
  phoneNumber: string;
  department: Department;

}
export class Actor {
  id: number;
  name: string;
  IDCard: string;
  phoneNumber: number;
}

export class Course {
  id: number;
  courseNo: string;
  name: string;
  credit: number;
  classHour: number;
  examWeek: number;
  courseType: CourseType;
  college: College;
  remarks: string;
}
export class Course1 {
  courseNo: string;
  name: string;
  credit: number;
  classHour: number;
  examWeek: number;
  courseType: CourseType;
  college: College;
  remarks: string;
}
export class CourseType {
  description: string;
  id: number;
  no: string;
  remarks: string;
}
export class College {
  id: number;
  no: string;
  description: string;
  school: School;
}
export class School {
  id: number;
  no: string;
  description: string;
}
export class UserRole {
  id: number;
  roleAllocationStatusSet: RoleAllocationStatus[];
  user: User;
}

export class RoleAllocationStatus {
  id: number;
  role: Role;
  allocated: boolean;
}

export class Role {
  id: number;
  no: string;
  description: string;
}

export class SimplifiedRoleAllocation {
  uerId: number;
  roleIds: number[];
}

export class SimplifiedMenuAllocation {
  roleId: number;
  menuIds: number[];
}

