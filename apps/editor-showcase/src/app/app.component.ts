import { Component } from "@angular/core";

@Component({
  selector: "simple-text-editor-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  config = [
    [
      "bold",
      "italic",
      "underline",
      "separator",
      "tabulation",
      "separator",
      "color"
    ],
    ["synonym"]
  ];
  sample = "<p>This <u>text</u> can be <i>edited</i> by <b>user</b>.</p>";

  onChange ($event) {
    console.log($event);
  }
}
