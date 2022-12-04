import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { BaseComponent } from '../../shared';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: [ './banner.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerComponent extends BaseComponent implements OnInit {
  @Input()
  public img: string;

  @Input()
  public title: string;

  @Input()
  public subtitle: string;

  constructor (
    // Angular
    changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    this.forceRender();
  }
}
