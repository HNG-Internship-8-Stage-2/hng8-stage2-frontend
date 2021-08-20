import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    private baseUrl = 'https://blaise-resume.herokuapp.com';

    constructor(private http: HttpClient) { }

    submitData(data: any): Observable<any> {
        return this.http.post<any>(`${this.baseUrl}/data/`, data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }
}
