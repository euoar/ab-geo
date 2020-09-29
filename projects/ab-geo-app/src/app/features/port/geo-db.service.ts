import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/ab-geo-app/src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../City';
import { GeoDbResponse } from './GeoDbResponse';

@Injectable()
export class GeoDbService {
  private rootGeoDb = environment.geoDbUrl;

  constructor(private http: HttpClient) {}

  getCityByName(cityName: string): Observable<City> {
    const cityUrl = `${this.rootGeoDb}/cities?namePrefix=${cityName}`;
    return this.http
      .get<GeoDbResponse>(cityUrl)
      .pipe(map((geoDbResponse) => geoDbResponse.data[0]));
  }
}
