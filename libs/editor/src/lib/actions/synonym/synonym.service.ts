import { Injectable } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap
} from 'rxjs/operators';
import { EditorSandbox } from '../../editor.sandbox';
import { EditorSynonymDataService } from './synonym.data';

@Injectable()
export class EditorSynonymService {
  constructor (
    private $synonymData: EditorSynonymDataService,
    private $editor: EditorSandbox
  ) {}

  get () {
    return this.$editor.selection
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter((selection) => {
          return selection.length > 0;
        }),
        switchMap((selection) => {
          return this.$synonymData
            .get(selection.replace(' ', '+'));
        }),
        map((res: { word: string }[]) => res.map(synonym => synonym.word))
      );
  }
}
