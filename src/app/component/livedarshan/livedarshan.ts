import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-livedarshan',
  imports: [CommonModule, Header, Footer],
  templateUrl: './livedarshan.html',
  styleUrl: './livedarshan.css',
})
export class Livedarshan {
  viewers = 1204;

  schedule = [
    { time: '06:00 AM', name: 'Mangal Aarti', done: true },
    { time: '08:30 AM', name: 'Shringar Aarti (Now)', live: true },
    { time: '12:00 PM', name: 'Rajbhog Aarti' },
    { time: '07:00 PM', name: 'Sandhya Aarti' }
  ];
}
