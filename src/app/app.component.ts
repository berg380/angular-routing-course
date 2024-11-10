import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly _router: Router) { }


  ngOnInit(): void {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationStart) console.log('Navigation Start');

    })
  }

  onActivate(event: unknown){
    console.log('on router-outlet active: ', event);
  }
}
