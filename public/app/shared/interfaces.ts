import { ModuleWithProviders } from '@angular/core';

export interface IStudent {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state?: IState;
    stateId?: number;
    zip: number;
    gender: string;
   
}

export interface IState {
    abbreviation: string;
    name: string;
}

export interface IDepartment {
    abbreviation: string;
    name: string;
}

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}

export interface IPagedResults<T> {
    totalRecords: number;
    results: T;
}

export interface IStudentResponse {
    student: IStudent;
    status: boolean;
    error: string;
}