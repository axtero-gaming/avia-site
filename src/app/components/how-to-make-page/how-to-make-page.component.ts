import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '../../shared';
import { HowToMakeSteps } from '../../shared/constants';

@Component({
  selector: 'app-how-to-make-page',
  templateUrl: './how-to-make-page.component.html',
  styleUrls: [ './how-to-make-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HowToMakePageComponent extends BaseComponent implements OnInit {
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
