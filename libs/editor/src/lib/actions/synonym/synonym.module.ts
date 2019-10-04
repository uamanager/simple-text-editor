import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EditorModule } from "../../editor.module";
import { EditorSynonymActionComponent } from "./synonym.component";
import { SynonymService } from "./synonym.service";

@NgModule({
  declarations: [
    EditorSynonymActionComponent
  ],
  imports: [
    EditorModule.forChild({
      actions: [
        {
          id: "synonym",
          component: EditorSynonymActionComponent
        }
      ]
    }),
    CommonModule
  ],
  exports: [
    EditorSynonymActionComponent
  ],
  providers: [
    SynonymService
  ]
})
export class EditorSynonymActionModule {
}
