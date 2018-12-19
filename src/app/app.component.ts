import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ass6Q4';
  message = 'Marvellous Infosystems'

  fun(){
    this.message = this.message.toLocaleUpperCase();
    return this.message;
  }

  gun(){
    this.message = this.message.toLocaleLowerCase();
    return this.message;
  }
}
