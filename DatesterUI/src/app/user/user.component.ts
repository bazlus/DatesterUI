import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById("openModalButton").click();
    }, 2000);
  }

  changeActive(source, other) {
    // source.srcElement.classList.add("active");
    // other.classList.remove("active");
  }
}
