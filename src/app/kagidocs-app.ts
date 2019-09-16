import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'kagidocs-app',
  templateUrl: './kagidocs-app.html',
  styleUrls: ['./kagidocs-app.scss']
})
export class KagidocsApp {
  title = 'core';
}
