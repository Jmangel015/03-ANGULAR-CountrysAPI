import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app.routing.module';

@NgModule({
  declarations: [SidebarComponent, MenuComponent, FooterComponent],
  exports: [SidebarComponent],
  imports: [CommonModule, AppRoutingModule],
})
export class SharedModule {}
