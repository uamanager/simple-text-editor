import { NgModule } from '@angular/core';
import { EditorModule } from '../../editor.module';
import { EditorUnderlineActionComponent } from './underline.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    EditorUnderlineActionComponent
  ],
  imports: [
    FontAwesomeModule,
    EditorModule.forChild({
      actions: [
        {
          id: 'underline',
          component: EditorUnderlineActionComponent
        }
      ]
    })
  ],
  exports: [
    EditorUnderlineActionComponent
  ]
})
export class EditorUnderlineActionModule {
}
