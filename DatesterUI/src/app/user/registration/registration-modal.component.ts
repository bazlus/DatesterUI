import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BirthDateConstants } from 'src/app/global-constants/global-constants';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService) { }

  register(formData) {
    let hobbies = $("#tokenfield").tokenfield('getTokens');
    formData.hobbies = hobbies.map(h => h.value);
    formData.DateOfBirth = new Date(formData.Year, formData.Month, formData.Day);
    this.userService.register(formData)

  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   document.getElementById("openModalButton").click();
    // }, 5000);
  }

}
