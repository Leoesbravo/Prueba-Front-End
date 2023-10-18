import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../models/RootObject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  private apiUrl = 'https://besvc.capacitateparaelempleo.org/api/inscriptions/TestReport';
  constructor(private http: HttpClient) {}

  getInformacion(): Observable<RootObject> {
    return this.http.get<RootObject>(this.apiUrl);
  }
}
