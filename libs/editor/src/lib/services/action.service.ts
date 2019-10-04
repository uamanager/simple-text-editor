import { Injectable } from "@angular/core";
import { GenericDataService } from "../utils/data.service";

export interface IEditorAction {
  id: string;
  component: any;
}

@Injectable({
  providedIn: "root"
})
export class EditorActionService extends GenericDataService<IEditorAction> {
  public execCommand (id: string, value: any = null) {
    document.execCommand(id, false, value)
  }

  public error (message: string) {
    super.error(message, "EditorActionService");
  }
}
