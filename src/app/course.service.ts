import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  Response, Course, Course1, CourseType, College, Role, Menu, MenusRole, DynamicMenu, User, Student, Student1
} from './entity';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  response: Response;
  private userUrl = 'http://localhost:8080/login.ctl';
  private logoutUrl = 'http://localhost:8080/logout.ctl';
  private courseUrl = 'http://localhost:8080/course.ctl';
  private courseTypeUrl = 'http://localhost:8080/courseType.ctl';
  private collegeUrl = 'http://localhost:8080/college.ctl';
  // private menuUrl = 'http://localhost:8080/menu.ctl';
  // private roleUrl = 'http://localhost:8080/role.ctl';
  private roleMenuUrl = 'http://localhost:8080/roleMenu.ctl';
  private studentUrl = 'http://localhost:8080/student.ctl';
  constructor(private http: HttpClient) { }

  // 验证登录用户账号密码是否正确
  checkUser(user: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.userUrl, user);
  }
  logOut(): Observable<any> {
    return this.http.get<any>(this.logoutUrl);
  }
  getRoleMenu(id: number): Observable<MenusRole[]> {
    return this.http.get<MenusRole[]>(this.roleMenuUrl + '?id=' + id).pipe();
  }
  // getRoleByUser(id: number): Observable<Role[]> {
  //   return this.http.get<Role[]>(this.roleUrl + '?id=' + id).pipe();
  // }
  // getMenuByUser(id: number): Observable<Menu[]> {
  //   return this.http.get<Menu[]>(this.menuUrl + '?id=' + id).pipe();
  // }
  getCourseByname(name: string): Observable<Course[]> {
    const url = this.courseUrl + '?name=' + name;
    return this.http.get<Course[]>(url).pipe();
  }
  getStudentMenuByTeacher(id: number): Observable<Student1[]> {
    return this.http.get<Student1[]>(this.studentUrl + '?teacherId=' + id).pipe();
  }
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.courseUrl).pipe();
  }
  getCourse(id: number): Observable<Course> {
    const url = this.courseUrl + '?id=' + id;
    return this.http.get<Course>(url).pipe();
  }
  deleteCourse(course: Course | number): Observable<Response> {
    const id = typeof course === 'number' ? course : course.id;
    return this.http.delete<Response>(this.courseUrl + '?id=' + id, httpOptions).pipe();
  }
  addCourse(course: Course1): Observable<Response> {
    return this.http.post<Response>(this.courseUrl, course, httpOptions).pipe();
  }
  updateCourse(course: Course): Observable<Response> {
    return this.http.put<Response>(this.courseUrl, course, httpOptions).pipe();
  }
  getCourseTypes(): Observable<CourseType[]> {
    return this.http.get<CourseType[]>(this.courseTypeUrl).pipe();
  }
  getCourseType(id: number): Observable<CourseType> {
    const url = this.courseTypeUrl + '?id=' + id;
    return this.http.get<CourseType>(url).pipe();
  }
  getColleges(): Observable<College[]> {
    return this.http.get<College[]>(this.collegeUrl).pipe();
  }
  getCollege(id: number): Observable<College> {
    const url = this.collegeUrl + '?id=' + id;
    return this.http.get<College>(url).pipe();
  }
  /**
   * Handle Http operation that failed.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

