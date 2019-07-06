import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent implements AfterViewInit {
  ngAfterViewInit(): void {

  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      document.getElementById("openModalButton").click();
    }, 1);
  }

}
