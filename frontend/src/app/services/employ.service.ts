import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emploi } from '../models/emploi.model';

@Injectable({
  providedIn: 'root'
})
export class EmploiService {
  private apiUrl = 'http://localhost:8080/api/emplois'; 

  constructor(private http: HttpClient) { }

  addEmploi(emploi: Emploi): Observable<Emploi> {
    return this.http.post<Emploi>(this.apiUrl, emploi);
  }

  getEmploisByPersonneId(personneId: number): Observable<Emploi[]> {
    const url = `${this.apiUrl}/personne/${personneId}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByNomEntreprise(nomEntreprise: string): Observable<Emploi[]> {
    const url = `${this.apiUrl}/entreprise/${nomEntreprise}`;
    return this.http.get<Emploi[]>(url);
  }

  getEmploisByPersonIdAndDateRange(personId: number, startDate: Date, endDate: Date): Observable<Emploi[]> {
    const url = `${this.apiUrl}/personne/${personId}/dates?startDate=${startDate}&endDate=${endDate}`;
    return this.http.get<Emploi[]>(url);
  }
}
