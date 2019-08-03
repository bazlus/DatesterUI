import { Observable } from 'rxjs';
import { AppConfig } from './../app-config/app-config';
import { ToastrService } from 'ngx-toastr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user-model';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = AppConfig.settings.apiServer;

  constructor(private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private jwtHelper: JwtHelperService) { }

  register(userModel): boolean {
    this.httpClient.post(this.api.RegisterUserUrl, userModel)
      .toPromise().then(res => {
        this.toastr.success("Registration Successful")
        this.toastr.info("Logging In")
        this.login(userModel);
        return true;
      }).catch(err => {
        if (err && err.error.errors[0].code === "DuplicateUserName") {
          this.toastr.error("Email is already taken")
          return false;
        }
      })

    return false;
  }

  login(loginModel): boolean {
    this.httpClient.post(this.api.LoginUserUrl, loginModel)
      .toPromise().then((res: any) => {
        localStorage.setItem('token', res.token);
        this.toastr.success("Login Successful")
        this.router.navigate(["user/profile"])
      }, err => {
        console.log(err);
        if (err.status === 400) {
          this.toastr.error("Incorrect username or password")
        }
      })

    return false;
  }

  uploadImage(image: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': image.type,
      })
    };

    this.httpClient.post(this.api.UploadImageUrl, image, httpOptions)
      .subscribe(res => {
        console.log(res);
      }, err => {
        //handel
      })
  }

  getCurrentUser(): Observable<any> {
    return this.httpClient.get(this.api.GetCurrentUserUrl);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    return !this.jwtHelper.isTokenExpired(token);
  }

}