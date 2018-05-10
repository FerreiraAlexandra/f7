"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var data_service_1 = require("../core/data.service");
var StudentEditComponent = /** @class */ (function () {
    function StudentEditComponent(router, route, dataService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.student = {
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            email: '',
            city: '',
            zip: 0
        };
        this.operationText = 'Insert';
    }
    StudentEditComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getStudent(id);
        }
        this.getStates();
        this.getDepartments();
    };
    StudentEditComponent.prototype.getStudent = function (id) {
        var _this = this;
        this.dataService.getStudent(id)
            .subscribe(function (student) {
            _this.student = student;
        }, function (err) { return console.log(err); });
    };
    StudentEditComponent.prototype.getStates = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    StudentEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.student._id) {
            this.dataService.updateStudent(this.student)
                .subscribe(function (student) {
                if (student) {
                    _this.router.navigate(['/students']);
                }
                else {
                    _this.errorMessage = 'Unable to save student';
                }
            }, function (err) { return console.log(err); });
        }
        else {
            this.dataService.insertStudent(this.student)
                .subscribe(function (student) {
                if (student) {
                    _this.router.navigate(['/students']);
                }
                else {
                    _this.errorMessage = 'Unable to add student';
                }
            }, function (err) { return console.log(err); });
        }
    };
    StudentEditComponent.prototype.cancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/']);
    };
    StudentEditComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteStudent(this.student._id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/students']);
            }
            else {
                _this.errorMessage = 'Unable to delete student';
            }
        }, function (err) { return console.log(err); });
    };
    StudentEditComponent = __decorate([
        core_1.Component({
            selector: 'student-edit',
            templateUrl: './student-edit.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            data_service_1.DataService])
    ], StudentEditComponent);
    return StudentEditComponent;
}());
exports.StudentEditComponent = StudentEditComponent;
//# sourceMappingURL=student-edit.component.js.map