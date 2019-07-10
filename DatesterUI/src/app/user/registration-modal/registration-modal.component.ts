import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BirthDateConstants } from 'src/app/global-constants/global-constants';

declare var $: any

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent implements OnInit {

  private days = BirthDateConstants.days;
  private months = BirthDateConstants.months;
  private years = BirthDateConstants.years;

  selectedGender = 'Male';
  selectedDay = 1;
  selectedMonth = 1;
  selectedYear = 1990;

  constructor() { }

  register(formData) {
    let hobbies = $("#tokenfield").tokenfield('getTokens');
    console.log(formData);
    console.log(hobbies);
  }

  ngOnInit(): void {
    setTimeout(() => {
      document.getElementById("openModalButton").click();
    }, 1);
  }

}
