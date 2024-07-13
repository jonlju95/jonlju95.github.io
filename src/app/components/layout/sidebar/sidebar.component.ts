import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../../services/sidebarService';
import { ThemeService } from '../../../services/themeService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: []
})
export class SidebarComponent {
  public loading: boolean = true;

  constructor(public sidebarService: SidebarService, public themeService: ThemeService) { }

  public onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }

  expandSidebar(expand: boolean) {
    this.sidebarService.setActive(expand);
    this.animateSidebar(expand);
  }

  animateSidebar(expand: boolean) {
    if (expand) {
      document.getElementsByClassName('sidebar')[0].classList.replace('hide', 'expand');
      setTimeout(() => {
        document.getElementsByClassName('sidebar-text')[0].classList.replace('fadeOut', 'fadeIn');
        document.getElementsByClassName('theme-switch')[0].classList.replace('fadeOut', 'fadeIn');
      }, 300);

    } else {
      document.getElementsByClassName('sidebar-text')[0].classList.replace('fadeIn', 'fadeOut');
      document.getElementsByClassName('theme-switch')[0].classList.replace('fadeIn', 'fadeOut');
      setTimeout(() => {
        document.getElementsByClassName('sidebar')[0].classList.replace('expand', 'hide');
      }, 300);
    }
  }
}
