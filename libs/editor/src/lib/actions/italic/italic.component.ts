import { Component } from "@angular/core";
import { faItalic } from "@fortawesome/free-solid-svg-icons";
import { EditorSandbox } from "../../editor.sandbox";

@Component({
  selector: "editor-action-italic",
  template: `
	  <button>
		  <fa-icon [icon]="faItalic" (click)="setItalic()"></fa-icon>
	  </button>
  `,
  styleUrls: ["../action.component.scss"]
})
export class EditorItalicActionComponent {
  public faItalic = faItalic;

  constructor (private $editor: EditorSandbox) {}

  setItalic () {
    this.$editor.execCommand("italic");
  }
}
