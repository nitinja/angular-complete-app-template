import { Component, OnInit } from "@angular/core";

@Component({
  selector: "static",
  template: `
    <div class="h-full w-full flex flex-col justify-center items-center">
      404 - Page not found!
      <div>Check link address or go <a href="#" routerLink="/">Home</a> </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
