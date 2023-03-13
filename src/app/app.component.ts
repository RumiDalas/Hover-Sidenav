import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  btnVisible: boolean = true;

  makeCall(){
    window.location.href = 'tel:0188888';
  }
}
