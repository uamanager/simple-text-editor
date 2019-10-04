import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ComponentFactory,
  ComponentFactoryResolver, ComponentRef, Input, OnChanges, OnInit, SimpleChanges,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import { EditorSandbox } from "../../editor.sandbox";

@Component({
  selector: "editor-action",
  templateUrl: "./action.component.html",
  styleUrls: ["./action.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorActionComponent implements OnInit, OnChanges, AfterViewInit  {
  @Input() action: string;
  @ViewChild('actionContainer', { static: true, read: ViewContainerRef }) actionContainerRef;

  public actionRef: ComponentRef<Component>;

  constructor(
    private $cdr: ChangeDetectorRef,
    private $cfr: ComponentFactoryResolver,
    private $editor: EditorSandbox,
  ){}

  ngOnInit() {
    const _action = this.$editor.getActionById(this.action);
    this.create(_action.component);
    this.applyChanges();
  }

  ngOnChanges (changes: SimpleChanges) {
    this.applyChanges();
  }

  ngAfterViewInit (): void {
    this.$cdr.detach();
  }

  private applyChanges (): void {
    if (this.$cdr["destroyed"] === false) {
      this.$cdr.detectChanges();
    }
  }

  private create(component) {
    const factory: ComponentFactory<Component> = this.$cfr.resolveComponentFactory(component);
    this.actionContainerRef.clear();
    this.actionRef = this.actionContainerRef.createComponent(factory);
  }
}
