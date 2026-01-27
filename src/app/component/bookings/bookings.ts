import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

type bookingTab = 'all' | 'upcoming' | 'completed' | 'cancelled';
type bookingStatus = 'CONFIRMED' | 'PENDING' | 'COMPLETED' | 'CANCELLED';

interface Booking {
  temple: string;
  title: string;
  date: string;
  time: string;
  id: string;
  amount: number;
  status: bookingStatus;
  type: 'Pooja' | 'Darshan';
  image: string;
} 

@Component({
  selector: 'app-bookings',
  imports: [ CommonModule, Header, Footer ],
  templateUrl: './bookings.html',
  styleUrl: './bookings.css',
})

export class Bookings {
  
  tabs: bookingTab[] = ['all', 'upcoming', 'completed', 'cancelled'];
  activeTab: bookingTab = 'all';

  private today = new Date( new Date().setHours(0, 0, 0, 0));

  bookings: Booking[] = [
    {
      temple: 'Shree Siddhivinayak Temple',
      title: 'Morning Abhishek Pooja',
      date: '2026-01-28',
      time: '06:00 AM',
      id: 'DAR-88392',
      amount: 501,
      status: 'CONFIRMED',
      type: 'Pooja',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTcOjNIB97FeuZsnAM3d3g2yzLzmhPJrYMs6s3tdECENnu6aliTUma1vS9ZEsTj5_im5kelswWS_3o1ybKm4Ch26dtfGMtxRNp6_10ONiJ6Kf380Wov8rGeurwdG5rCSTB8CBxckJGHqbtEWEug3uuRbrFv5y9MgMIZMz34zUqHgRYPvDUDi6CyJTSVr5zK6Zo7JN4Y80PVwt0hD6xv7EHIy9CO0_YUoKBvEEhdDmW0eHp3IY5PrJtwG3e6EaT_bastWOl27Mt0_2u',
    },
    {
      temple: 'Tirupati Balaji',
      title: 'Special Entry Darshan',
      date: '2025-12-10',
      time: '10:00 AM',
      id: 'TBD-11200',
      amount: 300,
      status: 'COMPLETED',
      type: 'Darshan',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtsJmZTySK2srkKgh5ERh0L5EOQ7ppRLPQ4gE3vT1BCSaL-kKuq5lSaYaH9RhCeUDQnaI_1L24vRcVEahYAuE3vU_TaIDDvE54nAQ4i5rtVrerMVO6vzzMmCb8k5YTwmythJ2Mo7uqhoff81ejjVzP4PC9FqG2kYZCA_WPNHaq3mlqRBpKBh8Qb7ubPwH_fp_VqzHqbORiDMqSYU2pGuYEj9yshT2Bi1cfi3zKL1Eq8d79g8nA0NRmO-01KhK2VT5hlNsBGUfbnNRh',
    },
    {
      temple: 'Vaishno Devi',
      title: 'VIP Aarti Pass',
      date: '2025-11-02',
      time: '07:00 PM',
      id: 'VD-55431',
      amount: 1100,
      status: 'CANCELLED',
      type: 'Darshan',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB31Xxpc-qqYQKeQPSNt92ri_-vKe5lC-1rQIc_S1RmxhVJtWG7EA6D4uF7u0oR6vRBOZTHAef2LfEc4UVNMgqsxZmndnegiD8MPeU-1j-oRDnXbJEkoWRfbfEltY98nG--mRobSrxv7FN2Pzvm1GvZz41CJiY1IaL42VdTyxM1O2d5dDhOIUZdt3MmiitopsbQmnU8ImM4KpcTWwO-bYKGEYSWOvLSpKv6wYacgADnhc3cVwoyuAo8s-dpLLF2T_OS3j84OvkKcj2F',
    }
  ];

  get filteredBookings(): Booking[] {
    return this.bookings.filter((booking) => {
      const bookingDate = new Date(booking.date);

      switch (this.activeTab) {
        case 'upcoming':
          return (
            bookingDate >= this.today &&
            booking.status !== 'CANCELLED'
          );

        case 'completed':
          return (
            bookingDate < this.today &&
            booking.status !== 'CANCELLED'
          );

        case 'cancelled':
          return booking.status === 'CANCELLED';

        case 'all':
        default:
          return true;
      }
    });
  }

}
