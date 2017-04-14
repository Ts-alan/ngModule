import { Component } from '@angular/core';

import { HomeModule } from './HomeModule/home.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HomeModule],
})
export class AppComponent {
  title = 'hello world';
}
