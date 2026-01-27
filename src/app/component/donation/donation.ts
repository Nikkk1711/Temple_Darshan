import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-donation',
  imports: [CommonModule, FormsModule, Header, Footer],
  templateUrl: './donation.html',
  styleUrl: './donation.css',
})
export class Donation {
  frequency: 'one-time' | 'monthly' = 'one-time';
  amount = 501;
  customAmount?: number;
  cause = 'General Temple Fund';

  name = '';
  email = '';
  pan = '';
  dedicate = false;

  selectAmount(value: number) {
    this.amount = value;
    this.customAmount = undefined;
  }

  submit() {
    const finalAmount = this.customAmount || this.amount;

    console.log({
      frequency: this.frequency,
      amount: finalAmount,
      cause: this.cause,
      name: this.name,
      email: this.email,
      pan: this.pan,
      dedicate: this.dedicate,
    });
  }
}
