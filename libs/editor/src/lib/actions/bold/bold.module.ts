import { NgModule } from '@angular/core';
import { EditorModule } from '../../editor.module';
import { EditorBoldActionComponent } from './bold.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    EditorBoldActionComponent
  ],
  imports: [
    FontAwesomeModule,
    EditorModule.forChild({
      actions: [
        {
          id: 'bold',
          component: EditorBoldActionComponent
        }
      ]
    })
  ],
  exports: [
    EditorBoldActionComponent
  ]
})
export class EditorBoldActionModule {
}
