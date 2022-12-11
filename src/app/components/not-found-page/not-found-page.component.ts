import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '../../shared';
import { HowToMakeSteps } from '../../shared/constants';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: [ './not-found-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPageComponent extends BaseComponent implements OnInit {
  public steps = HowToMakeSteps;

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
