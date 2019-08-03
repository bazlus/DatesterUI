import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  private showSidebar: boolean;

  constructor() { }

  ngOnInit() {
    this.showSidebar = true;
  }

}
