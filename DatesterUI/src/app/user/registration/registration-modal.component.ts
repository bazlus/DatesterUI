import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GlobalConstatns } from 'src/app/global-constants/global-constants';
import { UserService } from 'src/app/services/user.service';
import { NgForm, NgModelGroup } from '@angular/forms';

declare var $: any

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.css']
})
export class RegistrationModalComponent implements AfterViewInit {

  private days: number[] = GlobalConstatns.days;
  private months: string[] = GlobalConstatns.months;
  private years: number[] = GlobalConstatns.years;

  loaderButtonHidden = true;
  registerButtonHidden = false;
  selectedGender = 'Male';
  selectedDay = 1;
  selectedMonth = "January";
  selectedYear = 1990;

  constructor(private userService: UserService) { }

  ngAfterViewInit(): void {
    $('.tokenfield').tokenfield();
  }

  async register(formData) {
    this.loaderButtonHidden = false;
    this.registerButtonHidden = true;
    let hobbies = $("#tokenfield").tokenfield('getTokens');
    formData.hobbies = hobbies.map(h => h.value);
    formData.DateOfBirth = new Date(formData.Year, this.getMonthNumber(formData.Month), formData.Day);
    let result: boolean = await this.userService.register(formData);

    if (!result) {
      this.loaderButtonHidden = true;
      this.registerButtonHidden = false;
    }

  }

  getMonthNumber(monthString: string): number {

    let monthIndex = -1;

    this.months.forEach((month, index) => {
      if (month == monthString) {
        monthIndex = index;
      }
    })

    return monthIndex;
  }


}
