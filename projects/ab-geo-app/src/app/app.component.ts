import { Component } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'ab-geo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ab-geo-app';
  constructor(angulartics2GoogleTagManager: Angulartics2GoogleTagManager) {
    angulartics2GoogleTagManager.startTracking();
  }
}
