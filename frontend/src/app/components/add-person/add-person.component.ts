import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonneService } from '../../services/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent {
  person: any = {};

  constructor(private personneService: PersonneService, private router: Router) { }

  addPerson(): void {
    this.personneService.addPersonne(this.person).subscribe(() => {
      this.router.navigate(['/persons']);
    });
  }
}
