import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Operation } from './../entities/operation.enum';
import { UserService } from './../services/user.service';
import { MatchService } from './../services/match.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user-model';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

declare const $: any;

@Component({
  selector: 'app-find-love',
  templateUrl: './find-love.component.html',
  styleUrls: ['./find-love.component.css']
})
export class FindLoveComponent implements OnInit {

  private images: any[] = [];
  users: User[];
  currentUser: User;
  currentUserId: number = 0;
  showImages: boolean = false;

  constructor(private matchServie: MatchService,
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private rouret: Router) { }

  ngOnInit() {
    this.getUserBatch();
  }

  getUserBatch(offset: number = 0) {
    this.matchServie.getPotentialMatches(offset)
      .subscribe(resUsers => {
        if (!!resUsers) {
          this.rouret.navigate(['user/profile'])
        }
        this.users = resUsers;
        this.loadCurrentUser();
      }, err => {
        console.log(err);
      })
  }

  async loadCurrentUser() {
    this.currentUser = this.users[this.currentUserId];
    this.currentUser.images = [];
    for (let i = 0; i < this.currentUser.photosCount; i++) {
      let resImage = await this.userService.getImage(i, this.currentUser.email)
      let imageUrl = URL.createObjectURL(resImage);
      this.currentUser.images.push({ "url": imageUrl });
    }

    this.showImages = true;
  }

  operation(operationValue: string) {
    let operation: Operation = Operation[operationValue]
    this.matchServie.addUserOperation(this.currentUser.email, operation)
      .subscribe(isMatch => {
        if (isMatch) {
          this.toastr.success(`${this.currentUser.firstName} is a match for you !`)
        }

        if (this.currentUserId == this.users.length - 1) {
          this.getUserBatch(this.users.length);
        } else {
          this.currentUserId++;
          this.loadCurrentUser();
        }

      }, err => {
        console.log(err);
      });
  }

  getImageUrl(i): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentUser.images[i].url);
  }

}
