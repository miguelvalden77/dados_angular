import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dados';
  number1 = 1
  number2 = 3
  win = false

  tirarDados() {
    this.win = false

    this.number1 = Math.ceil(Math.random() * 6)
    this.number2 = Math.ceil(Math.random() * 6)

    if (this.number1 === this.number2) this.win = true
  }
}
