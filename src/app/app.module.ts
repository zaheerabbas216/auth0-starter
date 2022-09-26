import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ApiComponent } from './components/api/api.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { WelcomeComponentComponent } from './components/welcome-component/welcome-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginButtonComponent,
    ProfileComponent,
    HomeComponent,
    ApiComponent,
    LogoutButtonComponent,
    WelcomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AuthModule.forRoot({
      domain: "dev-3i6puho9.us.auth0.com",
      clientId: "EiRRTQPD1MFyRSduzFOQPno4uc3Kaap9"
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
