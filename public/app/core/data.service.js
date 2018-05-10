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
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = '/api/students';
        this.baseStatesUrl = '/api/states';
    }
    DataService.prototype.getStudents = function () {
        return this.http.get(this.baseUrl)
            .map(function (students) {
            return students;
        })
            .catch(this.handleError);
    };
    DataService.prototype.getStudentsPage = function (page, pageSize) {
        return this.http.get(this.baseUrl + "/page/" + page + "/" + pageSize, { observe: 'response' })
            .map(function (res) {
            //Need to observe response in order to get to this header (see {observe: 'response'} above)
            var totalRecords = +res.headers.get('x-inlinecount');
            var students = res.body;
            return {
                results: students,
                totalRecords: totalRecords
            };
        })
            .catch(this.handleError);
    };
    DataService.prototype.getStudent = function (id) {
        return this.http.get(this.baseUrl + '/' + id)
            .catch(this.handleError);
    };
    DataService.prototype.insertStudent = function (student) {
        return this.http.post(this.baseUrl, student)
            .map(function (data) {
            console.log('insertStudent status: ' + data.status);
            return data.student;
        })
            .catch(this.handleError);
    };
    DataService.prototype.updateStudent = function (student) {
        return this.http.put(this.baseUrl + '/' + student._id, student)
            .map(function (data) {
            console.log('updateStudent status: ' + data.status);
            return data.student;
        })
            .catch(this.handleError);
    };
    DataService.prototype.deleteStudent = function (id) {
        return this.http.delete(this.baseUrl + '/' + id)
            .catch(this.handleError);
    };
    DataService.prototype.getStates = function () {
        return this.http.get(this.baseStatesUrl)
            .catch(this.handleError);
    };
    DataService.prototype.getDepartments = function () {
        return this.http.get(this.baseDepartmentsUrl)
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return Observable_1.Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable_1.Observable.throw(error || 'Node.js server error');
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map