import { Component, OnInit } from '@angular/core';
import { Personne } from '../../models/personne.model';
import { PersonneService } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  persons: Personne[] = [];

  constructor(private personneService: PersonneService) { }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personneService.getAllPersonnes().subscribe((data: Personne[]) => {
      this.persons = data;
    });
  }
}
