import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss']
})
export class CookieConsentComponent implements OnInit {
  consentGiven = '';
  private readonly consentKey = 'cookieConsent';

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.consentGiven = this.cookieService.get(this.consentKey);
  }

  acceptCookies(): void {
    this.cookieService.set(this.consentKey, 'true', { path: '/' });
    this.consentGiven = 'true';
  }

  declineCookies(): void {
    this.cookieService.set(this.consentKey, 'false', { path: '/' });
    this.consentGiven = 'false';
  }
}
