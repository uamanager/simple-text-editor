import { Component } from "@angular/core";
import { faBold } from "@fortawesome/free-solid-svg-icons";
import { EditorSandbox } from "../../editor.sandbox";

@Component({
  selector: "editor-action-bold",
  template: `
	  <button>
		  <fa-icon [icon]="faBold" (click)="setBold()"></fa-icon>
	  </button>
  `,
  styleUrls: ["../action.component.scss"]
})
export class EditorBoldActionComponent {
  public faBold = faBold;

  constructor (private $editor: EditorSandbox) {}

  setBold () {
    this.$editor.execCommand("bold");
  }
}
