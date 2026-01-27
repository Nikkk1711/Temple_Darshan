import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
