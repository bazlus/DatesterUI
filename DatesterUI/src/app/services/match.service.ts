import { Injectable } from "@angular/core";
import { User } from '../entities/user-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MatchService{

    constructor(private http: HttpClient) {
        
    }

    getMatches(user: User){
    }
}