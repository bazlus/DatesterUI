import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-find-love',
  templateUrl: './find-love.component.html',
  styleUrls: ['./find-love.component.css']
})
export class FindLoveComponent implements OnInit {

  private images: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
