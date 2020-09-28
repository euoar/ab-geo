import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

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
}
