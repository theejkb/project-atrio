import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonneService } from '../../services/person.service';
import { Emploi } from '../../models/emploi.model';
import { EmploiService } from '../../services/employ.service';

@Component({
  selector: 'app-add-employment',
  templateUrl: './add-employment.component.html',
  styleUrls: ['./add-employment.component.scss']
})
export class AddEmploymentComponent implements OnInit {
  employment: Emploi = {} as Emploi;
  personId: number = 0;
  filtredEmploy: Emploi[] = [];

  constructor(private route: ActivatedRoute, private employService: EmploiService, private router: Router) { }

  ngOnInit(): void {
    const personIdParam = this.route.snapshot.paramMap.get('personId');
    if (personIdParam !== null) {
      this.personId = +personIdParam;
    } else {
      console.error("No 'personId' parameter found in the URL.");
    }
  }

  addEmployment(): void {
    if (this.personId !== undefined) {
      this.employService.addEmploi(this.employment).subscribe(() => {
      });
    }
  }

  getEmploisByPersonneId(personneId: number): void {
    this.employService.getEmploisByPersonneId(personneId).subscribe((emplois) => {
      this.filtredEmploy = emplois;
    });
  }

  getEmploisByNomEntreprise(nomEntreprise: string): void {
    this.employService.getEmploisByNomEntreprise(nomEntreprise).subscribe((emplois) => {
      this.filtredEmploy = emplois;
    });
  }

  getEmploisByPersonIdAndDateRange(personId: number, startDate: Date, endDate: Date): void {
    this.employService.getEmploisByPersonIdAndDateRange(personId, startDate, endDate).subscribe((emplois) => {
      this.filtredEmploy = emplois;
    });
  }
}
