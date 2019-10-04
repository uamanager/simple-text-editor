import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { EditorActionService, IEditorAction } from "./services/action.service";

export interface IEditorSetupConfig {
  actions?: IEditorAction[];
}

@Injectable({
  providedIn: "root"
})
export class EditorSandbox {
  public value: BehaviorSubject<string> = new BehaviorSubject('');
  public change: Subject<any> = new Subject();
  public range: BehaviorSubject<any> = new BehaviorSubject({
    start: 0,
    end: 0
  });
  constructor (private $action: EditorActionService) {}

  public setSetupConfig (config: IEditorSetupConfig) {
    if (config.actions) {
      this.$action.createBulk(config.actions);
    }
  }

  public getActionById (action: string) {
    return this.$action.read(action);
  }

  public execCommand (id: string, value: any = null) {
    this.$action.execCommand(id, value);
    this.change.next();
  }
}
