import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentComponent } from './cookie-consent.component';

@NgModule({
  declarations: [CookieConsentComponent],
  imports: [CommonModule],
  exports: [CookieConsentComponent]
})
export class CookieConsentModule {}
