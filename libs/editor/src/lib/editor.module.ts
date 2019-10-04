import { CommonModule } from "@angular/common";
import {
  ANALYZE_FOR_ENTRY_COMPONENTS,
  Inject,
  ModuleWithProviders,
  NgModule,
  Optional
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { EditorActionComponent } from "./components/action/action.component";
import { EditorActionBarComponent } from "./components/actions-bar/actionBar.component";
import { EditorComponent } from "./components/editor/editor.component";
import { EditorSandbox, IEditorSetupConfig } from "./editor.sandbox";
import { EDITOR_CONFIGS, provideConfigs } from "./utils/configs.token";

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
    EditorComponent,
    EditorActionComponent,
    EditorActionBarComponent
  ],
  exports: [EditorComponent]
})
export class EditorModule {
  constructor (
    private $editor: EditorSandbox,
    @Optional() @Inject(EDITOR_CONFIGS) editorConfigs: IEditorSetupConfig[] = []
  ) {
    if (editorConfigs) {
      editorConfigs.forEach((editorConfig) => {
        $editor.setSetupConfig(editorConfig);
      });
    }
  }

  static forRoot (config: IEditorSetupConfig = {}): ModuleWithProviders {
    return {
      ngModule: EditorModule,
      providers: [
        provideConfigs(config),
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          useValue: config,
          multi: true
        }
      ]
    };
  }

  static forChild (config: IEditorSetupConfig = {}): ModuleWithProviders {
    return {
      ngModule: EditorModule,
      providers: [
        provideConfigs(config),
        {
          provide: ANALYZE_FOR_ENTRY_COMPONENTS,
          useValue: config,
          multi: true
        }
      ]
    };
  }
}
