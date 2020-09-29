import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
declare let gtag: Function;

@Component({
  selector: 'ab-geo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private titleService: Title) {
    this.titleService.setTitle('About Ab-Geo');
  }

  ngOnInit(): void {}

  clicked() {
    gtag('event', 'Click', {
      eventCategory: 'Botones',
      eventLabel: 'eventLabel',
      eventAction: 'eventAction',
      eventValue: 1,
    });
  }
}
