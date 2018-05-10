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
var forms_1 = require("@angular/forms");
var data_service_1 = require("../core/data.service");
var validation_service_1 = require("../shared/validation.service");
var StudentEditReactiveComponent = /** @class */ (function () {
    function StudentEditReactiveComponent(router, route, dataService, formBuilder) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
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
    StudentEditReactiveComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id !== '0') {
            this.operationText = 'Update';
            this.getStudent(id);
        }
        this.getStates();
        this.getDepartments();
        this.buildForm();
    };
    StudentEditReactiveComponent.prototype.getStudent = function (id) {
        var _this = this;
        this.dataService.getStudent(id)
            .subscribe(function (student) {
            _this.student = student;
            _this.buildForm();
        }, function (err) { return console.log(err); });
    };
    StudentEditReactiveComponent.prototype.buildForm = function () {
        this.studentForm = this.formBuilder.group({
            firstName: [this.student.firstName, forms_1.Validators.required],
            lastName: [this.student.lastName, forms_1.Validators.required],
            gender: [this.student.gender, forms_1.Validators.required],
            email: [this.student.email, [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            address: [this.student.address, forms_1.Validators.required],
            city: [this.student.city, forms_1.Validators.required],
            stateId: [this.student.stateId, forms_1.Validators.required],
        });
    };
    StudentEditReactiveComponent.prototype.getStates = function () {
        var _this = this;
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    StudentEditReactiveComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        value._id = this.student._id;
        value.zip = this.student.zip || 0;
        // var student: IStudent = {
        //   _id: this.student._id,
        // };
        if (value._id) {
            this.dataService.updateStudent(value)
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
            this.dataService.insertStudent(value)
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
    StudentEditReactiveComponent.prototype.cancel = function (event) {
        event.preventDefault();
        this.router.navigate(['/students']);
    };
    StudentEditReactiveComponent.prototype.delete = function (event) {
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
    StudentEditReactiveComponent = __decorate([
        core_1.Component({
            selector: 'student-edit-reactive',
            templateUrl: './student-edit-reactive.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            data_service_1.DataService,
            forms_1.FormBuilder])
    ], StudentEditReactiveComponent);
    return StudentEditReactiveComponent;
}());
exports.StudentEditReactiveComponent = StudentEditReactiveComponent;
//# sourceMappingURL=student-edit-reactive.component.js.map