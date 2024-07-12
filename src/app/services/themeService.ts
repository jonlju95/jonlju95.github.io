import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnInit {

  private isLightTheme: boolean = true;

  ngOnInit(): void {
  }

  toggleTheme(): void {
    this.isLightTheme = !this.isLightTheme;
    document.body.setAttribute('data-theme', this.isLightTheme ? 'light' : 'dark');
  }

  get currentTheme(): string {
    return this.isLightTheme ? 'light' : 'dark';
  }
}
