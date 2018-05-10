import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

import { IStudent, IState, IPagedResults, IDepartment, IStudentResponse } from '../shared/interfaces';

@Injectable()
export class DataService {
  
    baseUrl: string = '/api/students';
    baseStatesUrl: string = '/api/states'

    constructor(private http: HttpClient) { 

    }
    
    getStudents() : Observable<IStudent[]> {
        return this.http.get<IStudent[]>(this.baseUrl)
                   .map((students: IStudent[]) => {
                       return students;
                   })
                   .catch(this.handleError);
    }

    getStudentsPage(page: number, pageSize: number) : Observable<IPagedResults<IStudent[]>> {
        return this.http.get<IStudent[]>(`${this.baseUrl}/page/${page}/${pageSize}`, {observe: 'response'})
                    .map((res) => {
                        //Need to observe response in order to get to this header (see {observe: 'response'} above)
                        const totalRecords = +res.headers.get('x-inlinecount');
                        let students = res.body as IStudent[];
                        return {
                            results: students,
                            totalRecords: totalRecords
                        };
                    })
                    .catch(this.handleError);
    }
    
    getStudent(id: string) : Observable<IStudent> {
        return this.http.get<IStudent>(this.baseUrl + '/' + id)
                   .catch(this.handleError);
    }

    insertStudent(student: IStudent) : Observable<IStudent> {
        return this.http.post<IStudentResponse>(this.baseUrl, student)
                   .map((data) => {
                       console.log('insertStudent status: ' + data.status);
                       return data.student;
                   })
                   .catch(this.handleError);
    }
   
    updateStudent(student: IStudent) : Observable<IStudent> {
        return this.http.put<IStudentResponse>(this.baseUrl + '/' + student._id, student) 
                   .map((data) => {
                       console.log('updateStudent status: ' + data.status);
                       return data.student;
                   })
                   .catch(this.handleError);
    }

    deleteStudent(id: string) : Observable<boolean> {
        return this.http.delete<boolean>(this.baseUrl + '/' + id)
                   .catch(this.handleError);
    }
   
    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>(this.baseStatesUrl)
                   .catch(this.handleError);
    }

    getDepartments(): Observable<IDepartment[]> {
        return this.http.get<IDepartment[]>(this.baseDepartmentsUrl)
                   .catch(this.handleError);
    }


    
    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error); 
        if (error.error instanceof Error) {
          let errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

}
