import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ngb-theme-switcher-example';

  showSidebar: boolean = true;
  showNavbar: boolean = true;
  showFooter: boolean = true;
  isLoading: boolean;

  constructor(private router: Router) {
    
    // Removing Sidebar, Navbar, Footer and Auth pages
    router.events.forEach((event) => { 
      if(event instanceof NavigationStart) {
        if((event['url'] == '/auth/signin') || (event['url'] == '/auth/signup') || (event['url'] == '/auth/forgot-password') || (event['url'] == '/auth/reset-password') ) {
          this.showSidebar = false;
          this.showNavbar = false;
          this.showFooter = false;
          document.querySelector('.main-panel').classList.add('w-100');
          document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
          document.querySelector('.content-wrapper').classList.remove('auth', 'auth-img-bg', );
          document.querySelector('.content-wrapper').classList.remove('auth', 'lock-full-bg');
          if((event['url'] == '/auth/forgot-password') || (event['url'] == '/auth/reset-password')) {
            document.querySelector('.content-wrapper').classList.add('p-0');
          }
        } else {
          this.showSidebar = true;
          this.showNavbar = true;
          this.showFooter = true;
          document.querySelector('.main-panel')?.classList.remove('w-100');
          document.querySelector('.page-body-wrapper')?.classList.remove('full-page-wrapper');
          document.querySelector('.content-wrapper')?.classList.remove('auth', 'auth-img-bg');
          document.querySelector('.content-wrapper')?.classList.remove('p-0');
        }
      }
    });

    // Spinner for lazyload modules
    router.events.forEach((event) => { 
      if (event instanceof RouteConfigLoadStart) {
          this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
          this.isLoading = false;
      }
    });
  }
  
  ngOnInit() {
    // Scroll to top after route change
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
  }
}
