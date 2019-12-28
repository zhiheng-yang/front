import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {
  Response,
  SimplifiedRoleAllocation, SimplifiedMenuAllocation
} from './entity';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserRoleMenuService {
  response: Response;
  private userRoleUrl = 'http://localhost:8080/userRoleAllocation.ctl';
  private simplifiedRoleAllocationUrl = 'http://localhost:8080/simplifiedRoleAllocation.ctl';
  private roleMenuUrl = 'http://localhost:8080/roleMenuAllocation.ctl';
  private simplifiedMenuAllocationUrl = 'http://localhost:8080/simplifiedMenuAllocation.ctl';

  constructor(private http: HttpClient) { }

  getUserRole(): Observable<any[]> {
    return this.http.get<any[]>(this.userRoleUrl).pipe();
  }

  getRoleMenu(): Observable<any[]> {
    return this.http.get<any[]>(this.roleMenuUrl).pipe();
  }

  updateUserRole(simplifiedRoleAllocation: SimplifiedRoleAllocation): Observable<Response> {
    return this.http.put<Response>(this.simplifiedRoleAllocationUrl, simplifiedRoleAllocation, httpOptions).pipe();
  }

  updateRoleMenu(simplifiedMenuAllocation: SimplifiedMenuAllocation): Observable<Response> {
    return this.http.put<Response>(this.simplifiedMenuAllocationUrl, simplifiedMenuAllocation, httpOptions).pipe();
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

