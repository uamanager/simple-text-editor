import { Component, OnInit } from "@angular/core";
import { debounce, map } from "rxjs/operators";
import { EditorSandbox } from "../../editor.sandbox";

@Component({
  selector: "editor-action-synonym",
  template: `
	  <button *ngFor="let color of colors" (click)="setSynonym(color)">{{color}}</button>
  `,
  styleUrls: ["../action.component.scss"]
})
export class EditorSynonymActionComponent implements OnInit {
  public colors = ["dasds", "fasfafsfa", "afasdgasdgs", "sfasdgasdgsadg"];

  constructor (private $editor: EditorSandbox) {}

  setSynonym (value: string) {
    this.$editor.execCommand("insertText", value);
  }

  public ngOnInit (): void {
    this.$editor.range.pipe(
        map((range) => {
          const value = this.$editor.value.getValue();
          const element = document.createElement('div');
          element.innerHTML = value;
          const text = element.innerText;
          text.slice(range.start, range.end - range.start)
        })
      )
      .subscribe()
  }
}
