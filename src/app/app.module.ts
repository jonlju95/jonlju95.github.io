import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieConsentModule } from './components/specific/cookie-consent/cookie-consent.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app.config';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    CookieConsentModule,
    NgbModule
  ],
  providers: []
})
export class AppModule { }

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
