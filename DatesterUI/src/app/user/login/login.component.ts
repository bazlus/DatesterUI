import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginButtonHidden = false;
  loadingButtonHidden = true;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  async login(formData: NgForm) {
    this.loadingButtonHidden = false;
    this.loginButtonHidden = true;

    var result = await this.userService.login(formData)

    if (!result) {
      this.loadingButtonHidden = true;
      this.loginButtonHidden = false;
    }
  }
}
