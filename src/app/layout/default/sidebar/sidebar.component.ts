import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  constructor(
    public settings: SettingsService
    ) {}

  ngOnInit() {
    setTimeout(() => {
      const sidebarNav = document.querySelector('.sidebar-nav')
      const links: HTMLLinkElement[] = Array.from(sidebarNav.querySelectorAll('.sidebar-nav__item-link'))
      links.forEach(_ => _.title = _.textContent)
    }, 2000)
  }
}
