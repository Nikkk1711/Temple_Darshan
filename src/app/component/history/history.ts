import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-history',
  imports: [Header, Footer],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {

}
