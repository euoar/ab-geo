import { Component, Input, OnInit } from '@angular/core';
import { City } from '../../City';

@Component({
  selector: 'ab-geo-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  @Input() city: City | null = null;

  constructor() {}

  ngOnInit(): void {}
}
