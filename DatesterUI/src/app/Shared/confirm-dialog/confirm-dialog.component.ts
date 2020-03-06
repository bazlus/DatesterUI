import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

export class DialogData {
  title: string;
  message: string;
  
  constructor(title: string, message: string){
    this.message = message;
    this.title = title;
  }
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit, AfterViewInit {

  @Input() dialogData: DialogData;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit()
{
  setTimeout(() => {
    document.getElementById("openModalButton").click();
  }, 1);
}
}
