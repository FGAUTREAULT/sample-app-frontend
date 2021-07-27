import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HTTPService } from "./http.service";

@Injectable({
    providedIn: 'root'
})
export class UserService extends HTTPService {

    context = '/users';

    constructor(private http: HttpClient){
        super();
    }

    getGreeting(username: string) {
        return this.http.get<any>(`${this.getAPI()}${this.buildContext()}/greeting?name=${username}`);
    }

}