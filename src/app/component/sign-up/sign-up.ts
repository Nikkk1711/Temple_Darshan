import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  acceptTerms = false;

  showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  submit() {
    if (!this.acceptTerms) {
      alert('Please accept the terms');
      return;
    }

    console.log({
      name: this.fullName,
      email: this.email,
      password: this.password,
      confirm: this.confirmPassword,
    });
  }
}
