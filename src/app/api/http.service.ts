import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export abstract class HTTPService {

    abstract context: string;
    private contextPath = '/api';

    constructor(){
        console.log('Searching local storage for API_URL: ' + this.getAPI());
    }

    protected getAPI(): string{
        return window.localStorage.getItem('API_URL') || 'http://localhost:8080';
    }

    protected buildContext(): string {
        return `${this.contextPath}${this.context}`
    }
}