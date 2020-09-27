import { NgModule } from '@angular/core';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, Angulartics2Module.forRoot(), CoreModule],
  providers: [Angulartics2GoogleAnalytics],
  bootstrap: [AppComponent],
})
export class AppModule {}
