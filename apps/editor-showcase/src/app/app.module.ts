import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {
  EditorBoldActionModule,
  EditorColorActionModule,
  EditorItalicActionModule,
  EditorModule,
  EditorSynonymActionModule,
  EditorTabulationActionModule,
  EditorUnderlineActionModule
} from "editor";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    EditorModule.forRoot(),
    EditorBoldActionModule,
    EditorColorActionModule,
    EditorItalicActionModule,
    EditorTabulationActionModule,
    EditorUnderlineActionModule,
    EditorSynonymActionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
