import { NgModule } from '@angular/core';
import { EditorModule } from '../../editor.module';
import { EditorItalicActionComponent } from './italic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    EditorItalicActionComponent
  ],
  imports: [
    FontAwesomeModule,
    EditorModule.forChild({
      actions: [
        {
          id: 'italic',
          component: EditorItalicActionComponent
        }
      ]
    })
  ],
  exports: [
    EditorItalicActionComponent
  ]
})
export class EditorItalicActionModule {
}
