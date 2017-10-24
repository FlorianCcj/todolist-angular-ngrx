import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { SystemSInfosComponent } from './system-s-infos/system-s-infos.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutComponent, MenuComponent, SystemSInfosComponent]
})
export class LayoutModule { }
