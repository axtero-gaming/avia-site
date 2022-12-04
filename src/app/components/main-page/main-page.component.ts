import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '../../shared';
import { Models } from '../../shared/constants';
import { ModelFactory } from '../../shared/enums';
import { Model } from '../../shared/interfaces';

interface FactoryItem {
  factory: ModelFactory;
  name: string;
  icon?: string;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: [ './main-page.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent extends BaseComponent implements OnInit {
  public activeFactory: ModelFactory = null;
  public factories: FactoryItem[] = [
    {
      factory: null,
      name: `All`,
    },
    {
      factory: ModelFactory.DIY,
      name: `DIY`,
    },
    {
      factory: ModelFactory.Zvezda,
      name: `Zvezda`,
      icon: '/assets/images/factories/zvezda.svg',
    },
    {
      factory: ModelFactory.Revell,
      name: `Revell`,
      icon: '/assets/images/factories/revel.webp',
    },
    {
      factory: ModelFactory.ICM,
      name: `ICM`,
      icon: '/assets/images/factories/icm.png',
    },
    {
      factory: ModelFactory.Academy,
      name: `Academy`,
      icon: '/assets/images/factories/Academy.jpg',
    },
    {
      factory: ModelFactory.Modelist,
      name: `Modelist`,
      icon: '/assets/images/factories/modelist.png',
    },
    {
      factory: ModelFactory.EasternExpress,
      name: `Eastern Express`,
      icon: '/assets/images/factories/estern-express.png',
    },
    {
      factory: ModelFactory.ARKModels,
      name: `ARK models`,
      icon: '/assets/images/factories/arc-model.jpg',
    },
  ];

  public filteredGalleryItems = [];

  constructor (
    // Angular
    changeDetection: ChangeDetectorRef,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    this.setActiveFactory(null);

    this.forceRender();
  }

  /**
   * Returns the model articul.
   *
   * @param  {Model} galleryItem
   * @return {string}
   */
  getArticul (galleryItem: Model): string {
    if (_.isNil(galleryItem.articul) === true) {
      return `N/A`;
    }

    return `${galleryItem.articul} (${galleryItem.factory})`;
  }

  /**
   * Selects a new active factory.
   *
   * @param  {FactoryItem} factoryItem
   * @return {void}
   */
  setActiveFactory (factory: ModelFactory): void {
    this.activeFactory = factory;
    this.filteredGalleryItems = _.isNil(this.activeFactory) === true
      ? Models : _.filter(Models, { factory: this.activeFactory });
    this.render(`activeFactory`, [ this.activeFactory ]);
  }
}
