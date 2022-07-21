import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [NgbDropdownConfig]
})

export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;

  constructor(
    config: NgbDropdownConfig,
    private theme: ThemeService
  ) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
    this.autoSetTheme();
  }
  autoSetTheme() {
    const myDate = new Date();
    const hrs = myDate.getHours();
    if (hrs < 6 ) {
      this.theme.current = 'dark'
    } else if (hrs < 6 && hrs <= 18) {
      this.theme.current = 'light'
    } else if (hrs >= 18 && hrs <= 24) {
      this.theme.current = 'dark'
    }
  }
  public selectTheme(value: string): void {
    this.theme.current = value;
  }

  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar() {
    let body:any = document.querySelector('body');
    if((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if(this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if(this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  // toggle right sidebar
  toggleRightSidebar() {
    document.querySelector('#right-sidebar').classList.toggle('open');
  }

}
