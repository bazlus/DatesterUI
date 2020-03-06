import { DialogData } from './../../../Shared/confirm-dialog/confirm-dialog.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  showModalDialog = false;
  dialogData: DialogData;

  constructor() { }

  ngOnInit() {
    this.dialogData = new DialogData("Log Out", "Are you sure you want to Log Out ?")
  }

  showModal(){
    this.showModalDialog = true;
  }
}
