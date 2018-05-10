import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { StudentsGridComponent } from './students/students-grid.component';
import { StudentEditComponent } from './students/student-edit.component';
import { StudentEditReactiveComponent } from './students/student-edit-reactive.component';
import { IRouting } from './shared/interfaces';

const routes: Routes = [
  { path: 'students', component: StudentsComponent},
  { path: 'students/:id', component: StudentEditComponent},
  //{ path: 'students/:id', component: StudentEditReactiveComponent },
  { path: '**', pathMatch:'full', redirectTo: '/students' } //catch any unfound routes and redirect to home page
];

export const appRouting: IRouting = { 
    routes: RouterModule.forRoot(routes),
    components: [ StudentsComponent, StudentEditComponent, StudentEditReactiveComponent, StudentsGridComponent ]
};
