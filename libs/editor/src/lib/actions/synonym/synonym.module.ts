import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { EditorModule } from "../../editor.module";
import { EditorSynonymActionComponent } from "./synonym.component";
import { EditorSynonymDataService } from './synonym.data';
import { EditorSynonymService } from "./synonym.service";

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
    CommonModule,
    HttpClientModule
  ],
  exports: [
    EditorSynonymActionComponent
  ],
  providers: [
    EditorSynonymService,
    EditorSynonymDataService
  ]
})
export class EditorSynonymActionModule {
}
