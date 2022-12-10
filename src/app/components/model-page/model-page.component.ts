import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BaseComponent } from '../../shared';
import { Models } from '../../shared/constants';
import { Model } from '../../shared/interfaces';

@Component({
  selector: 'app-model-page',
  templateUrl: './model-page.component.html',
  styleUrls: [ './model-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelPageComponent extends BaseComponent implements OnInit {
  public model: Model;

  constructor (
    // Angular
    changeDetection: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    const modelSlug = this.activatedRoute.snapshot.paramMap.get(`slug`);
    this.model = _.find(Models, { slug: modelSlug });
    this.forceRender();
  }
}
