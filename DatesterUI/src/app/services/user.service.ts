import { ToastrService } from 'ngx-toastr';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
              private router: Router,
              private toastr: ToastrService) { }

  register(userModel) {
    this.toastr.success("Registration Successful !")
    this.httpClient.post(environment.urls.RegisterUserUrl, userModel)
      .subscribe(res => {
        this.router.navigate(["/dates"]);
      }, err => {
        this.router.navigate
      })
  }

  login(loginModel) {
    this.httpClient.post(environment.urls.LoginUserUrl, loginModel)
    .subscribe (res => {
      // TODO save token to local storage
      console.log(res);
    }, err => {
      // TO handle errors 
    })
  }
}
