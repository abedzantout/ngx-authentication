import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgxAuthenticationComponent } from './ngx-authentication.component';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';

const components = [NgxAuthenticationComponent, AuthContainerComponent];
const services = [];
const entryComponents = [];
@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [...components, ...entryComponents],
  entryComponents: [...entryComponents],
  providers: [...services],
  exports: [...components, entryComponents]
})
export class NgxAuthenticationModule {}
