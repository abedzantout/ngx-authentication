import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxAuthenticationComponent } from './ngx-authentication.component';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const components = [NgxAuthenticationComponent, AuthContainerComponent];
const services = [];
const entryComponents = [];
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [
    ...components,
    ...entryComponents,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    RequestPasswordComponent,
    ResetPasswordComponent
  ],
  entryComponents: [...entryComponents],
  providers: [...services],
  exports: [...components, entryComponents]
})
export class NgxAuthenticationModule {}
