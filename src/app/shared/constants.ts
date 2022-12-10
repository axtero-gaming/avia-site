/* eslint-disable max-len */
import * as Interfaces from './interfaces';
import * as Enums from './enums';

export const HowToMakeSteps: Interfaces.HowToMakeStep[] = [
  {
    imgURL: '/assets/images/model/Airbus_A320Neo/img1.jpg',
    header: 'Doggo ipsum long bois lotsa pats blep',
    description: `
      <p>
        Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.
      </p>
      <p>
        Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.
      </p>
    `,
  },
  {
    imgURL: '/assets/images/model/Airbus_A320Neo/img2.jpg',
    header: 'Doggo ipsum long bois lotsa pats blep',
    description: `
      <p>
        Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.
      </p>
      <p>
        Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.
      </p>
    `,
  },
  {
    imgURL: '/assets/images/model/Airbus_A320Neo/img3.jpg',
    header: 'Doggo ipsum long bois lotsa pats blep',
    description: `
      <p>
        Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.
      </p>
      <p>
        Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.
      </p>
    `,
  },
  {
    imgURL: '/assets/images/model/Airbus_A320Neo/img1.jpg',
    header: 'Doggo ipsum long bois lotsa pats blep',
    description: `
      <p>
        Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.
      </p>
      <p>
        Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.
      </p>
    `,
  },
];

export const Models: Interfaces.Model[] = [
  {
    slug: 'A90_Orlyonok',
    previewURL: '/assets/images/gallery/A90.png',
    name: 'A90 Орлёнок',
    shortDescription: 'Советский транспортно-десантный экраноплан (экранолёт)',
    articul: '7016',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Airbus_A320Neo',
    previewURL: '/assets/images/gallery/AirbusA320_Neo.png',
    name: 'Airbus A320Neo',
    realPreviewURL: `/assets/images/model/Airbus_A320Neo/preview.jpg`,
    shortDescription: 'Узкофюзеляжный пассажирский реактивный самолёт семейства Airbus A320',
    description: `
      <p>Airbus A320neo (Аэробус А320нео) - базовая модель нового семейства среднемагистральных пассажирских самолетов разработки европейского концерна Airbus. A320neo представляет из себя глубокую модернизацию популярного авиалайнера <a data-href="['/models', 'airbusA320']">Airbus A320</a> с двигателями нового поколения, улучшенными бортовыми системами и более крупными законцовками крыла (шарклетами).</p>
      <p>Первые самолеты A320neo поступили в коммерческую эксплуатацию в 2016 году. В настоящее время серийное производство продолжается высокими темпами. Вместе с данной моделью, в семейство A320neo входят укороченная версия авиалайнера <a data-href="['/models', 'airbusA319Neo']">A319neo</a> и удлиненный <a data-href="['/models', 'airbusA321Neo']">A321neo</a>.</p>
    `,
    galleryItems: [
      {
        url: `/assets/images/model/Airbus_A320Neo/img1.jpg`,
      },
      {
        url: `/assets/images/model/Airbus_A320Neo/img2.jpg`,
      },
      {
        url: `/assets/images/model/Airbus_A320Neo/img3.jpg`,
      },
    ],
    specificationGroups: [
      {
        name: `Размеры`,
        items: [
          {
            name: `Длина (м)`,
            value: `37.6`,
          },
          {
            name: `Размах крыла (м)`,
            value: `35.8`,
          },
          {
            name: `Высота (м)`,
            value: `11.8`,
          },
          {
            name: `Площадь крыла (кв.м)`,
            value: `122.4`,
          },
        ],
      },
      {
        name: `Вес`,
        items: [
          {
            name: `Макс. взлетный вес (кг)`,
            value: `73 500 - 78 000`,
          },
          {
            name: `Макс. посадочный вес (кг)`,
            value: `64 500 - 66 000`,
          },
          {
            name: `Макс. вес без топлива (кг)`,
            value: `62 800 - 64 300`,
          },
          {
            name: `Макс. коммерческая загрузка (кг)`,
            value: `16 600`,
          },
          {
            name: `Емкость топливных баков (л)`,
            value: `23 760 - 26 750`,
          },
        ],
      },
      {
        name: `Летные данные`,
        items: [
          {
            name: `Дальность полета с макс. загрузкой (км)`,
            value: `6 850`,
          },
          {
            name: `Макс. крейсерская скорость (км/ч)`,
            value: `830`,
          },
          {
            name: `Максимальная скорость (км/ч)`,
            value: `890`,
          },
          {
            name: `Потолок (макс. высота полета) (м)`,
            value: `11 900`,
          },
        ],
      },
    ],
    articul: '7037',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Airbus_A321',
    previewURL: '/assets/images/gallery/AirbusA321.png',
    name: 'Airbus A321',
    articul: '7017',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Airbus_A350-1000',
    previewURL: '/assets/images/gallery/AirbusA350_1000.png',
    name: 'Airbus A350-1000',
    articul: '7020',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Airbus_A380-800',
    previewURL: '/assets/images/gallery/AirbusA380_800.png',
    name: 'Airbus A380-800',
    articul: '03922',
    factory: Enums.ModelFactory.Revell,
  },
  {
    slug: 'An225',
    previewURL: '/assets/images/gallery/An225.png',
    name: 'An-225',
    articul: '7035',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Boeing_737-800',
    previewURL: '/assets/images/gallery/Boeing737_800.png',
    name: 'Boeing 737-800',
    articul: '7019',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Boeing_747-8F',
    previewURL: '/assets/images/gallery/Boeing747_8F.png',
    name: 'Boeing 747-8F',
    articul: '7010',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Boeing_767-300',
    previewURL: '/assets/images/gallery/Boeing767_300.png',
    name: 'Boeing 767-300',
    articul: '7005',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Boeing_777-300ER',
    previewURL: '/assets/images/gallery/Boeing777_300ER.png',
    name: 'Boeing 777-300ER',
    articul: '7012',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Boeing_787-8',
    previewURL: '/assets/images/gallery/Boeing787_8.png',
    name: 'Boeing 787-8',
    articul: '7008',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Buran',
    previewURL: '/assets/images/gallery/Buran.png',
    name: 'Buran',
    articul: '14402',
    factory: Enums.ModelFactory.ARKModels,
  },
  {
    slug: 'Ground_Operations',
    previewURL: '/assets/images/gallery/GroundOperations.png',
    name: 'Ground Operations',
    articul: `XXXX`,
    factory: Enums.ModelFactory.DIY,
  },
  {
    slug: 'Il-62M',
    previewURL: '/assets/images/gallery/Il_62M.png',
    name: 'IL-62M',
    articul: '14405',
    factory: Enums.ModelFactory.ICM,
  },
  {
    slug: 'Il-86',
    previewURL: '/assets/images/gallery/Il86.png',
    name: 'IL-86',
    articul: '7001',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'L-410',
    previewURL: '/assets/images/gallery/L-410.png',
    name: 'L-410',
    articul: '144104',
    factory: Enums.ModelFactory.EasternExpress,
  },
  {
    slug: 'MC21-300',
    previewURL: '/assets/images/gallery/MC21_300.png',
    name: 'MC21-300',
    articul: '7033',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Mig-23',
    previewURL: '/assets/images/gallery/Mig23.png',
    name: 'Mig-23',
    articul: '12614',
    factory: Enums.ModelFactory.Academy,
  },
  {
    slug: 'Mig-29',
    previewURL: '/assets/images/gallery/Mig29.png',
    name: 'Mig-29',
    articul: '12615',
    factory: Enums.ModelFactory.Academy,
  },
  {
    slug: 'Sukhoi_Superjet_100',
    previewURL: '/assets/images/gallery/SukhoiSuperjet100.png',
    name: 'Sukhoi Superjet 100',
    articul: '7009',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Tupolev_Tu-154M',
    previewURL: '/assets/images/gallery/Tu154M.png',
    name: 'Tupolev Tu-154M',
    articul: '7004',
    factory: Enums.ModelFactory.Zvezda,
  },
  {
    slug: 'Tupolev_Tu-144',
    previewURL: '/assets/images/gallery/TupolevTu144.png',
    name: 'Tupolev Tu-144',
    articul: '214478',
    factory: Enums.ModelFactory.Modelist,
  },
];
