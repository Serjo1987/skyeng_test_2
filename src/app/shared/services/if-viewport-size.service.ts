import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';

export enum ViewPortSize {
  small = 'small',
  medium  = 'medium',
  large = 'large'
}

export interface IConfig {
  medium: number;
  large: number;
}

export class IfViewportSizeConfig implements IConfig {
  constructor(private config: IConfig) {}

  get medium() { return this.config.medium; }
  get large()  { return this.config.large; }
}

@Injectable()
export class IfViewportSizeService {
  private currentVps: BehaviorSubject<ViewPortSize>;

  constructor(private config: IfViewportSizeConfig) {
    this.focusVps();

    window.addEventListener('resize', this.focusVps.bind(this));
  }

  get getCurrentVps() {
    return this.currentVps.distinctUntilChanged();
  }

  private focusVps() {
    const width = document.body.clientWidth;
    let viewportSize = ViewPortSize.small;

    if (this.config.medium <= width && width < this.config.large) {
      viewportSize = ViewPortSize.medium;
    }

    if (this.config.large <= width) {
      viewportSize = ViewPortSize.large;
    }

    if (!this.currentVps) {
      this.currentVps = new BehaviorSubject<ViewPortSize>(viewportSize);
    } else {
      this.currentVps.next(viewportSize);
    }
  }
}
