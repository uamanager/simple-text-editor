import { NgModule } from '@angular/core';
import { EditorModule } from '../../editor.module';
import { EditorTabulationActionComponent } from './tabulation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    EditorTabulationActionComponent
  ],
  imports: [
    FontAwesomeModule,
    EditorModule.forChild({
      actions: [
        {
          id: 'tabulation',
          component: EditorTabulationActionComponent
        }
      ]
    })
  ],
  exports: [
    EditorTabulationActionComponent
  ]
})
export class EditorTabulationActionModule {
}
