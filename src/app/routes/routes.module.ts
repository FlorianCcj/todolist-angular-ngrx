import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { routes } from './routes';

@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
    SharedModule
  ],
  declarations: []
})
export class RoutesModule { }
