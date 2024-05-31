import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddEmploymentComponent } from './components/add-employment/add-employment.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, BrowserModule, AppRoutingModule, RouterModule, FormsModule],
  declarations: [  
    AddEmploymentComponent,
    AddPersonComponent,
    PersonDetailComponent,
    PersonListComponent],
  bootstrap: [ AddEmploymentComponent,
    AddPersonComponent,
    PersonDetailComponent,
    PersonListComponent],
  providers: [],
})
export class AppModule { }