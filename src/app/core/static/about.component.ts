import { Component, OnInit } from "@angular/core";

@Component({
  selector: "static",
  template: `
    <div class="h-full w-full flex justify-center items-center">
      Angular Inc. rocks!
    </div>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
