import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-1',
  templateUrl: './splash-1.page.html',
  styleUrls: ['./splash-1.page.scss'],
})
export class Splash1Page {
  nextRoute = '/splash-2';

  constructor() {}

}
