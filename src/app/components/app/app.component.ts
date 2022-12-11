import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { BaseComponent } from '../../shared';

interface NavigationItem {
  route: string;
  name: string;
  icon?: string;
  activeIcon?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends BaseComponent implements OnInit {
  public navigationItems: NavigationItem[] = [
    {
      route: '/models',
      name: 'Модели',
      icon: '/assets/images/navigation/plane-lines.png',
      activeIcon: '/assets/images/navigation/plane.png',
    },
    {
      route: '/how-to-make',
      name: 'Как сделать?',
      icon: '/assets/images/navigation/how-to-make-lines.png',
      activeIcon: '/assets/images/navigation/how-to-make.png',
    },
    {
      route: '/achievements',
      name: 'Награды',
      icon: '/assets/images/navigation/achivements-lines.png',
      activeIcon: '/assets/images/navigation/achivements.png',
    },
  ];

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

  /**
   * Triggers a render of UI if router outlet renders component.
   *
   * FYI[WORKAROUND]: Angular doesn't trigger component's hooks if we load them via Router.
   * We observe and `activate` output property to trigger a render manually.
   *
   * @return {void}
   */
  onRouteActivated (): void {
    this.forceRender();
  }
}
