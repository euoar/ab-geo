import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ab-geo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('About Ab-Geo');
  }

  ngOnInit(): void {}
}
