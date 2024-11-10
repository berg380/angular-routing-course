import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  constructor(){
    console.log('HomeComponent - constructor')
  }
  ngOnInit(): void {
    console.log('HomeComponent - OnInit')
  }
}
