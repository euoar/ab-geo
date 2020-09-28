import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { Angulartics2 } from 'angulartics2';

interface PortCity {
  city: string;
  country: string;
}

const PORT_CITIES: PortCity[] = [
  { city: 'Vigo', country: 'Spain' },
  { city: 'Santa Cruz de Tenerife', country: 'Spain' },
  { city: 'Buenos Aires', country: 'Argentina' },
  { city: 'Montevideo', country: 'Uruguay' },
  { city: 'Rio de Janeiro', country: 'Brasil' },
  { city: 'Caracas', country: 'Venezuela' },
  { city: 'Cartagena', country: 'Colombia' },
  { city: 'Cancún', country: 'México' },
];

@Component({
  selector: 'ab-geo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['city', 'country'];
  dataSource = new MatTableDataSource(PORT_CITIES);

  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private titleService: Title, private angulartics2: Angulartics2) {
    this.titleService.setTitle('Geo - List of ports');
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {}

  sortChanged(sort: Sort) {
    this.angulartics2.eventTrack.next({
      action: `by ${sort.active}`,
      properties: {
        category: 'sort',
        label: sort.direction,
      },
    });
  }
}
