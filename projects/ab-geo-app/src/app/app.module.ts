import { NgModule } from '@angular/core';
import {
  NgxGoogleAnalyticsModule,
  NgxGoogleAnalyticsRouterModule,
} from 'ngx-google-analytics';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    CoreModule,
    NgxGoogleAnalyticsModule.forRoot('UA-83549527-1'),
    NgxGoogleAnalyticsRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
