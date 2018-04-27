import { Component, OnInit } from "@angular/core";

@Component({
  selector: "side-menu",
  template: `
    <mat-nav-list role="directory">
        <a mat-list-item routerLink="dashboard">Dashboard</a>
        <a mat-list-item routerLink="about">Important Link 1</a>
        <a mat-list-item routerLink="about">Important Link 2</a>
        <a mat-list-item routerLink="about">About</a>
      </mat-nav-list>
  `,
  styles: []
})
export class MenuComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
