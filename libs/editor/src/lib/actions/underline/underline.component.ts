import { Component } from "@angular/core";
import { faUnderline } from "@fortawesome/free-solid-svg-icons";
import { EditorSandbox } from "../../editor.sandbox";

@Component({
  selector: "editor-action-underline",
  template: `
	  <button>
		  <fa-icon [icon]="faUnderline" (click)="setUnderline()"></fa-icon>
	  </button>
  `,
  styleUrls: ["../action.component.scss"]
})
export class EditorUnderlineActionComponent {
  public faUnderline = faUnderline;

  constructor (private $editor: EditorSandbox) {}

  setUnderline () {
    this.$editor.execCommand("underline");
  }
}
