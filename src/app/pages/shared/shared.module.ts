import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    SpinnerComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ClickOutsideModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    SpinnerComponent,
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
