import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from "@angular/core";
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "editor-action-bar",
  templateUrl: "./actionBar.component.html",
  styleUrls: ["./actionBar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorActionBarComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() config: string[][];

  faEllipsisV = faEllipsisV;

  constructor (
    private $cdr: ChangeDetectorRef
  ) {}

  ngOnInit () {
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
}
