import { AppConfig } from './../../app-config/app-config';
import { User } from './../../entities/user-model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  userModel: User;
  images: any[];
  currentNewImage: File;
  showImages: boolean = false;
  photoId: number = -1;
  constructor(private userService: UserService,
    private sanitizer: DomSanitizer) { }

  async ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe(async user => {
        this.userModel = user;
        this.images = user.photoUrls;
        this.showImages = true;
      });
  }

  getImageUrl(index): SafeUrl {
    this.photoId++;
    return this.images[index];
  }

  load(event) {
    this.currentNewImage = event.target.files[0]
    this.userService.uploadImage(this.currentNewImage);
  }

}