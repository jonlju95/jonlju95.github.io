import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private isOpen: boolean = false;

  constructor() { }

  toggleSidebar(): void {
    this.isOpen = !this.isOpen;
  }

  get isActive(): boolean {
    return this.isOpen;
  }
}
