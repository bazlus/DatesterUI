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

  async register(userModel): Promise<boolean> {
    console.log(userModel)
    var result = await this.httpClient.post(this.api.RegisterUserUrl, userModel)
      .toPromise().then(res => {
        this.toastr.success("Registration Successful")
        this.login(userModel);
        return true;
      }).catch(err => {
        if (err.error.errors[0].code === "DuplicateUserName") {
          this.toastr.error("Email is already taken")
          return false;
        }
      })

    return result;

  }

  login(loginModel) {
    this.httpClient.post(this.api.LoginUserUrl, loginModel)
      .toPromise().then(res => {
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
