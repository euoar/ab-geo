import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';

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
  titulo = 'Lista de puertos';

  displayedColumns: string[] = ['city', 'country'];
  dataSource = new MatTableDataSource(PORT_CITIES);

  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Geo - List of ports');
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {}
}
