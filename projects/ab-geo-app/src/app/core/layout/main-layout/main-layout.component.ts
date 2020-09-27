import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-geo-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  appTitle = 'Geo Aplication';

  constructor() {}

  ngOnInit(): void {}
}
