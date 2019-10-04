import { InjectionToken, ValueProvider } from '@angular/core';
import { IEditorSetupConfig } from "../editor.sandbox";

export const EDITOR_CONFIGS = new InjectionToken<any>('EDITOR_CONFIGS');

export function provideConfigs(editorConfigs: IEditorSetupConfig): ValueProvider[] {
  return [
    {
      provide: EDITOR_CONFIGS,
      multi: true,
      useValue: editorConfigs
    }
  ];
}
