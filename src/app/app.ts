import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Receipts } from './receipts/receipts';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Receipts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Receipts';
}
