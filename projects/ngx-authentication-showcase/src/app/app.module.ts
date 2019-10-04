import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAuthenticationModule } from '../../../ngx-authentication/src/lib/ngx-authentication.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxAuthenticationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
