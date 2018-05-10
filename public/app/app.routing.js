"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var students_component_1 = require("./students/students.component");
var students_grid_component_1 = require("./students/students-grid.component");
var student_edit_component_1 = require("./students/student-edit.component");
var student_edit_reactive_component_1 = require("./students/student-edit-reactive.component");
var routes = [
    { path: 'students', component: students_component_1.StudentsComponent },
    { path: 'students/:id', component: student_edit_component_1.StudentEditComponent },
    //{ path: 'students/:id', component: StudentEditReactiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/students' } //catch any unfound routes and redirect to home page
];
exports.appRouting = {
    routes: router_1.RouterModule.forRoot(routes),
    components: [students_component_1.StudentsComponent, student_edit_component_1.StudentEditComponent, student_edit_reactive_component_1.StudentEditReactiveComponent, students_grid_component_1.StudentsGridComponent]
};
//# sourceMappingURL=app.routing.js.map