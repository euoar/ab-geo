import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare let gtag: Function;

@Component({
  selector: 'ab-geo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ab-geo-app';
  constructor(public router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-83549527-1', {
          page_path: event.urlAfterRedirects,
        });
      }
    });
  }
}
