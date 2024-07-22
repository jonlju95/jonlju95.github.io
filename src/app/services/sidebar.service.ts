import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // Sidebar should be closed on load
  private showSidebar: boolean = false;

  constructor() { }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  get sidebarStatus(): boolean {
    return this.showSidebar;
  }
}
