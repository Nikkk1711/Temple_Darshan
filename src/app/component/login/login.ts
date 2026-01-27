import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink, Header, Footer],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    console.log('Login:', this.email, this.password);
  }

}
