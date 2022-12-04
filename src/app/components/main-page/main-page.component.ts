import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '../../shared';

enum ModelFactory {
  Zvezda = 'Zvezda',
  ARKModels = 'ARKModels',
  ICM = 'ICM',
  Academy = 'Academy',
  Revell = 'Revell',
  Modelist = 'Modelist',
  EasternExpress = 'Eastern Express',
}

interface FactoryItem {
  factory: ModelFactory;
  name: string;
  icon?: string;
}

interface GalleryItem {
  slug: string;
  previewURL: string;
  name: string;
  articul?: string;
  factory?: ModelFactory;
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

  public galleryItems: GalleryItem[] = [
    {
      slug: 'A90',
      previewURL: '/assets/images/gallery/A90.png',
      name: 'A90',
      articul: '7016',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'AirbusA320_Neo',
      previewURL: '/assets/images/gallery/AirbusA320_Neo.png',
      name: 'Airbus A320Neo',
      articul: '612753',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'AirbusA321',
      previewURL: '/assets/images/gallery/AirbusA321.png',
      name: 'Airbus A321',
      articul: '7017',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'AirbusA350_1000',
      previewURL: '/assets/images/gallery/AirbusA350_1000.png',
      name: 'Airbus A350-1000',
      articul: '7020',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'AirbusA380_800',
      previewURL: '/assets/images/gallery/AirbusA380_800.png',
      name: 'Airbus A380-800',
      articul: '03922',
      factory: ModelFactory.Revell,
    },
    {
      slug: 'An225',
      previewURL: '/assets/images/gallery/An225.png',
      name: 'An-225',
      articul: '7035',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'Boeing737_800',
      previewURL: '/assets/images/gallery/Boeing737_800.png',
      name: 'Boeing 737-800',
      articul: '7019',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'Boeing747_8F',
      previewURL: '/assets/images/gallery/Boeing747_8F.png',
      name: 'Boeing 747-8F',
      articul: '7010',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'Boeing767_300',
      previewURL: '/assets/images/gallery/Boeing767_300.png',
      name: 'Boeing 767-300',
      articul: '7005',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'Boeing777_300ER',
      previewURL: '/assets/images/gallery/Boeing777_300ER.png',
      name: 'Boeing 777-300ER',
      articul: '7012',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'Boeing787_8',
      previewURL: '/assets/images/gallery/Boeing787_8.png',
      name: 'Boeing 787-8',
      articul: '7008',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'Buran',
      previewURL: '/assets/images/gallery/Buran.png',
      name: 'Buran',
      articul: '14402',
      factory: ModelFactory.ARKModels,
    },
    {
      slug: 'GroundOperations',
      previewURL: '/assets/images/gallery/GroundOperations.png',
      name: 'Ground Operations',
    },
    {
      slug: 'Il_62M',
      previewURL: '/assets/images/gallery/Il_62M.png',
      name: 'IL-62M',
      articul: '14405',
      factory: ModelFactory.ICM,
    },
    {
      slug: 'Il86',
      previewURL: '/assets/images/gallery/Il86.png',
      name: 'IL 86',
      articul: '7001',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'L_410',
      previewURL: '/assets/images/gallery/L-410.png',
      name: 'L-410',
      articul: '144104',
      factory: ModelFactory.EasternExpress,
    },
    {
      slug: 'MC21_300',
      previewURL: '/assets/images/gallery/MC21_300.png',
      name: 'MC21-300',
      articul: '7033',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'Mig23',
      previewURL: '/assets/images/gallery/Mig23.png',
      name: 'Mig-23',
      articul: '12614',
      factory: ModelFactory.Academy,
    },
    {
      slug: 'Mig29',
      previewURL: '/assets/images/gallery/Mig29.png',
      name: 'Mig-29',
      articul: '12615',
      factory: ModelFactory.Academy,
    },
    {
      slug: 'SukhoiSuperjet100',
      previewURL: '/assets/images/gallery/SukhoiSuperjet100.png',
      name: 'Sukhoi Superjet 100',
    },
    {
      slug: 'Tu154M',
      previewURL: '/assets/images/gallery/Tu154M.png',
      name: 'Tupolev Tu-154M',
      articul: '7004',
      factory: ModelFactory.Zvezda,
    },
    {
      slug: 'TupolevTu144',
      previewURL: '/assets/images/gallery/TupolevTu144.png',
      name: 'Tupolev Tu-144',
      articul: '214478',
      factory: ModelFactory.Modelist,
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
   * @param  {GalleryItem} galleryItem
   * @return {string}
   */
  getArticul (galleryItem: GalleryItem): string {
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
      ? this.galleryItems : _.filter(this.galleryItems, { factory: this.activeFactory });
    this.render(`activeFactory`, [ this.activeFactory ]);
  }
}
