import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'test-render-component-view-port-size',
  templateUrl: './test-render-component-view-port-size.component.html',
  styleUrls: ['./test-render-component-view-port-size.component.scss']
})
export class TestRenderComponentViewPortSizeComponent implements OnInit {
  @Input() value: any;

  constructor() {}

  ngOnInit() {}
}
