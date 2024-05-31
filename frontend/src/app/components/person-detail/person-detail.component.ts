import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneService } from '../../services/person.service';
import { Personne } from '../../models/personne.model';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss']
})
export class PersonDetailComponent implements OnInit {
  person: any;

  constructor(private route: ActivatedRoute, private personneService: PersonneService) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.personneService.getPersonne(id).subscribe((data: Personne) => {
        this.person = data;
      });
    } else {
      console.error("No 'id' parameter found in the URL.");
    }
  }
}
