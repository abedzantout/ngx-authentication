import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxAuthenticationComponent } from './ngx-authentication.component';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { BrandColumnComponent } from './components/brand-column/brand-column.component';
import { NgxAuthenticationRoutingModule, routedComponents } from './ngx-authentication-routing.module';

const components = [NgxAuthenticationComponent, AuthContainerComponent, ...routedComponents];
const services = [];
const entryComponents = [];

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, NgxAuthenticationRoutingModule, ReactiveFormsModule],
  declarations: [
    ...components,
    ...entryComponents,
    LogoutComponent,
    RegisterComponent,
    RequestPasswordComponent,
    ResetPasswordComponent,
    BrandColumnComponent
  ],
  entryComponents: [...entryComponents],
  providers: [...services],
  exports: [...components, entryComponents]
})
export class NgxAuthenticationModule {}
