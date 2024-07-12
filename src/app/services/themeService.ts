import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'theme';
  private readonly consentKey = 'cookieConsent';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object,
    private cookieService: CookieService) {
    this.loadTheme();
  }

  toggleTheme(): void {
    if (isPlatformBrowser(this.platformId) && this.cookieService.check(this.consentKey)) {
      const currentTheme = this.document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      this.document.body.setAttribute('data-theme', newTheme);
      this.cookieService.set(this.themeKey, newTheme, { path: '/' });
    }
  }

  get currentTheme(): string {
    return this.document.body.getAttribute('data-theme') || 'light';
  }

  loadTheme(): void {
    if (this.cookieService.check(this.consentKey)) {
      const savedTheme = this.cookieService.get(this.themeKey) || 'light';
      this.document.body.setAttribute('data-theme', savedTheme);
    }
  }
}
