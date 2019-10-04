import { Component } from "@angular/core";
import { faFont } from "@fortawesome/free-solid-svg-icons";
import { EditorSandbox } from "../../editor.sandbox";

@Component({
  selector: "editor-action-color",
  template: `
	  <button *ngFor="let color of colors">
		  <fa-icon [icon]="faFont"
		           [style.color]="color"
		           (click)="setColor(color)"></fa-icon>
	  </button>
  `,
  styleUrls: ["../action.component.scss"]
})
export class EditorColorActionComponent {
  public faFont = faFont;
  public colors: string[] = ["#000000", "#ff0000", "#00ff00", "#0000ff"];

  constructor (private $editor: EditorSandbox) {}

  setColor (color: string) {
    this.$editor.execCommand("foreColor", color);
  }
}
