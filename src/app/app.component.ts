import { Component, OnInit } from '@angular/core';

declare function runAllJS(): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor() {}

  ngOnInit(): void {
    runAllJS();
  }
}
