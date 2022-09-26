import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponentComponent } from './components/welcome-component/welcome-component.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: "", component: WelcomeComponentComponent },
  { path: "home", component: HomeComponent, canActivate: [AuthGuard], },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard], },
  { path: "api", component: ApiComponent, canActivate: [AuthGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
