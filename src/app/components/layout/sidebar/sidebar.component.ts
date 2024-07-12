import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarService } from '../../../services/sidebarService';
import { ThemeService } from '../../../services/themeService';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: []
})
export class SidebarComponent {
  public loading: boolean = true;

  constructor(public sidebarService: SidebarService, public themeService: ThemeService) { }

  public toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }

  public onThemeSwitchChange() {
    this.themeService.toggleTheme();
  }
}
