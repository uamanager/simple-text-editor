import { Component, OnInit } from '@angular/core';
import { EditorSandbox } from '../../editor.sandbox';
import { EditorSynonymService } from './synonym.service';

@Component({
  selector: 'editor-action-synonym',
  template: `
	    <div *ngIf="synonyms.length === 0; then synonymsNotFound; else synonymsList"></div>

	    <ng-template #synonymsList>
		    <button *ngFor="let synonym of synonyms" (click)="setSynonym(synonym)">{{synonym}}</button>
	    </ng-template>

	    <ng-template #synonymsNotFound>
		    <p>Select text to search for synonyms...</p>
	    </ng-template>
  `,
  styleUrls: ['../action.component.scss']
})
export class EditorSynonymActionComponent implements OnInit {
  public synonyms = [];

  constructor (
    private $editor: EditorSandbox,
    private $synonym: EditorSynonymService
  ) {}

  public ngOnInit (): void {
    this.$synonym.get()
      .subscribe((res) => {
        this.synonyms = res;
      });
  }

  public setSynonym (value: string) {
    this.$editor.execCommand('insertText', value);
  }
}
