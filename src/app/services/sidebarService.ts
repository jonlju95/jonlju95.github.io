import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  // Sidebar should be closed on load
  private isOpen: boolean = false;

  constructor() { }

  setActive(open: boolean): void {
    this.isOpen = open;
  }

  get isActive(): boolean {
    return this.isOpen;
  }
}
