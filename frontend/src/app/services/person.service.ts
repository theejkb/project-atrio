import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personne } from '../models/personne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private apiUrl = 'http://localhost:8080/api/personnes'; 

  constructor(private http: HttpClient) { }

  addPersonne(personne: Personne): Observable<Personne> {
    return this.http.post<Personne>(this.apiUrl, personne);
  }

  getAllPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl);
  }

  getPersonne(id: number): Observable<Personne> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Personne>(url);
  }
}
