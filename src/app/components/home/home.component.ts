import { Component, OnInit } from '@angular/core';

declare function progressBar(): any;
declare function addBackground(): any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    addBackground();
    progressBar();
  }

}
