import { AppConfig } from './../../app-config/app-config';
import { User } from './../../entities/user-model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userModel: User;
  images: any[];
  currentNewImage: File;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.images = [];

    this.images.push({ url: '../../../assets/DatesterLogo.png' });
    this.images.push({ url: '../../../assets/pink-pattern-stock-wallpaper.jpg' });

    this.userModel = new User();
    this.userModel.lastName = "Mihaylov";
    this.userModel.firstName = "Boyan";
    this.userModel.age = 22;
    this.userModel.description = "Description......................sadkaoskdasodjoasdhasudhasidhasiudjsaodijasdijasiodasjudohasiduahui...";
    this.userModel.email = "email@email.com";
  }

  load(event) {
    this.currentNewImage = event.target.files[0]
    this.userService.uploadImage(this.currentNewImage);
  }
}
