import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CityComponent } from './city/city.component';
import { GeoDbService } from './geo-db.service';
import { PortRoutingModule } from './port-routing.module';
import { PortComponent } from './port.component';
@NgModule({
  declarations: [PortComponent, CityComponent],
  imports: [CommonModule, PortRoutingModule, SharedModule, HttpClientModule],
  providers: [GeoDbService],
})
export class PortModule {}
