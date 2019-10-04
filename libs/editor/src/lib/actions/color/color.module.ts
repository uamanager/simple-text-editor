import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { EditorModule } from '../../editor.module';
import { EditorColorActionComponent } from './color.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    EditorColorActionComponent
  ],
  imports: [
    FontAwesomeModule,
    EditorModule.forChild({
      actions: [
        {
          id: "color",
          component: EditorColorActionComponent
        }
      ]
    }),
    CommonModule
  ],
  exports: [
    EditorColorActionComponent
  ]
})
export class EditorColorActionModule {
}
