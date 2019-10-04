import { Component } from "@angular/core";
import { faIndent, faOutdent } from "@fortawesome/free-solid-svg-icons";
import { EditorSandbox } from "../../editor.sandbox";

@Component({
  selector: "editor-action-tabulation",
  template: `
	  <button>
		  <fa-icon [icon]="faIndent" (click)="setIndent(true)"></fa-icon>
	  </button>
	  <button>
		  <fa-icon [icon]="faOutdent" (click)="setIndent(false)"></fa-icon>
	  </button>
  `,
  styleUrls: ["../action.component.scss"]
})
export class EditorTabulationActionComponent {
  public faIndent = faIndent;
  public faOutdent = faOutdent;

  constructor (private $editor: EditorSandbox) {}

  setIndent (indent: boolean) {
    this.$editor.execCommand(indent ? "indent" : "outdent");
  }
}
