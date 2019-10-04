import {
  Component,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { Subscription } from "rxjs";
import { EditorSandbox } from "../../editor.sandbox";

@Component({
  selector: "editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditorComponent),
      multi: true
    }
  ]
})
export class EditorComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() disabled = false;
  @Input() config: string[][] = [];
  @Output() change: EventEmitter<string> = new EventEmitter();
  @ViewChild("editor", { static: true, read: ViewContainerRef }) editorRef;

  private $change: Subscription;

  onChange () {
    if (this._onChange) {
      const next = this.editorRef.element.nativeElement.innerHTML;
      this._onChange(next);
      this.$editor.value.next(next);
    }
  }

  @HostListener("keyup", ["$event"])
  keyup (event: any) {
    this.onChange();
    this.updateCaret(event);
  }

  @HostListener("click", ["$event"])
  click (event: any) {
    this.updateCaret(event);
  }

  public _onChange = (value) => {};
  public _onTouched = () => {};

  constructor (
    private $editor: EditorSandbox,
    private $domSanitizer: DomSanitizer,
    private $renderer: Renderer2
  ) {
  }

  public ngOnInit (): void {
    this.$change = this.$editor.change.subscribe(() => this.onChange());
  }

  public registerOnChange (fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched (fn: any): void {
    this._onTouched = fn;
  }

  public setDisabledState (isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue (value: any): void {
    if (!value) {
      value = "";
    }
    this.$renderer.setProperty(this.editorRef.element.nativeElement, "innerHTML", value);
  }

  public updateCaret ($event: any) {
    const selection = document.getSelection();
    this.$editor.range.next({
      start: selection['baseOffset'],
      end: selection['focusOffset']
    });
  }

  public ngOnDestroy () {
    this.$change.unsubscribe();
  }
}
