import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  register(userModel) {

    this.httpClient.post(environment.urls.RegisterUserUrl, userModel)
      .subscribe(data => {
        console.log(data);
      }, errors => {
        console.log(errors);
      })
  }
}
