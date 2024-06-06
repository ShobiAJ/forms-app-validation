import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms-app';

  constructor(private _router: Router) {}


  templateForm() {
    this._router.navigate(['./template'])
  }

  reactiveForm() {
    this._router.navigate(['./reactive'])
  }
}
