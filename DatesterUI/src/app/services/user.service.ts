import { AppConfig } from './../app-config/app-config';
import { ToastrService } from 'ngx-toastr';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../entities/user-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  api = AppConfig.settings.apiServer;

  constructor(private httpClient: HttpClient,
    private router: Router,
    private toastr: ToastrService) { }

  register(userModel) {
    this.httpClient.post(this.api.RegisterUserUrl, userModel)
      .subscribe(res => {
        this.toastr.success("Registration Successful !")
        this.router.navigate(["/dates"]);
      }, err => {
        this.router.navigate
      })
  }

  login(loginModel) {
    this.httpClient.post(this.api.LoginUserUrl, loginModel)
      .subscribe(res => {
        // TODO save token to local storage
        console.log(res);
      }, err => {
        // TO handle errors 
      })
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
}
