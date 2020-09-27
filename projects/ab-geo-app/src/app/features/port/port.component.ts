import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from '../City';
import { GeoDbService } from './geo-db.service';

@Component({
  selector: 'ab-geo-port',
  templateUrl: './port.component.html',
  styleUrls: ['./port.component.scss'],
})
export class PortComponent implements OnInit {
  city$: Observable<City>;
  constructor(route: ActivatedRoute, geoDbService: GeoDbService) {
    const portId = route.snapshot.params.id;
    this.city$ = geoDbService.getCityByName(portId);
  }

  ngOnInit(): void {}
}
