import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
import { PersonDetailComponent } from "./components/person-detail/person-detail.component";
import { AddPersonComponent } from "./components/add-person/add-person.component";
import { AddEmploymentComponent } from "./components/add-employment/add-employment.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    { path: '' },
    { path: 'persons', component: PersonListComponent },
    { path: 'person/:id', component: PersonDetailComponent },
    { path: 'add-person', component: AddPersonComponent },
    { path: 'add-employment/:personId', component: AddEmploymentComponent },
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule, FormsModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

export { routes };