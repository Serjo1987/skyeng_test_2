import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

import {
  IfViewportSizeService,
  ViewPortSize
} from '../services/if-viewport-size.service';

import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[ifViewportSize]'
})
export class IfViewportSizeDirective implements OnInit, OnDestroy {
  private viewPortSize: ViewPortSize;
  private currentVps: Subscription;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private ifViewPortSizeService: IfViewportSizeService
  ) { };

  ngOnInit() {
    this.currentVps = this.ifViewPortSizeService.getCurrentVps.subscribe((size: ViewPortSize) => {
      if (size === this.viewPortSize) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }

  ngOnDestroy() {
    this.currentVps.unsubscribe();
  }

  @Input()
  set ifViewportSize(size: ViewPortSize) {
    this.viewPortSize = size;
  }
}
