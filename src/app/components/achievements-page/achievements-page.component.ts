import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '../../shared';
import { HowToMakeSteps } from '../../shared/constants';

@Component({
  selector: 'app-achievements-page',
  templateUrl: './achievements-page.component.html',
  styleUrls: [ './achievements-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementsPageComponent extends BaseComponent implements OnInit {
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
