import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit {


  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      document.getElementById("openModalButton").click();
    }, 1);
  }
}
