import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById("openModalButton").click();
    }, 2000);
  }

  facebookLogin() {
    this.httpClient.get("http://localhost:49889/signin-facebook")
      .subscribe(res => {
        console.log(res)
      }, err =>{  
        console.log(err)
      });
  }
}
