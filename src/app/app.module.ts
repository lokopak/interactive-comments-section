import { isPlatformBrowser } from '@angular/common';
import { NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_WINDOW } from './app.options';

export function windowProviderFactory(platformId: any): Window | undefined {
  if (isPlatformBrowser(platformId)) {
    return window;
  }

  return undefined;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: APP_WINDOW,
      useFactory: windowProviderFactory,
      deps: [PLATFORM_ID],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
