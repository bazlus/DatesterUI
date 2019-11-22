import { Operation } from './../entities/operation.enum';
import { Observable, of } from 'rxjs';
import { Injectable } from "@angular/core";
import { User } from '../entities/user-model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../app-config/app-config';

@Injectable({
    providedIn: 'root',
})
export class MatchService {

    api = AppConfig.settings.apiServer;

    constructor(private http: HttpClient) {

    }

    getPotentialMatches(offset: number): Observable<any> {
        return this.http.get(this.api.GetPotentialMatches + `/?offset=${offset}`);
    }

    addUserOperation(targetUserEmail: string, oeperation: Operation) {
        return this.http.post(this.api.AddUserOperation, { targetUserEmail: targetUserEmail, operation: oeperation })
    }
}