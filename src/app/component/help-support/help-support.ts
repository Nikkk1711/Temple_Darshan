import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-help-support',
  imports: [ CommonModule, FormsModule, Header, Footer ],
  templateUrl: './help-support.html',
  styleUrl: './help-support.css',
})
export class HelpSupport {

  searchText = '';

  navLinks = [
    'Home', 'History', 'Programs', 'Donation',
    'Live Darshan', 'Gallery', 'Trust', 'Help', 'Bookings'
  ];

  heroBg =
    `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.6)),
     url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGU4Nis8kK9tUdaESj3DgvI7AOhG8m-jpiHlUWOcVse3DqUd1GcMyJTxI7MGH4OF-u634WL9OymdHdKdcHvJhOvLA2KwVaoQmd1Sw7qdJ9PLSCJz2oznf_-YlX5nklleDUemI4OeBIeC5GgIxyOnj9WJR_6mDZlHpiFv3d1r-SVuUF_Au6NppoGhkr1z6D5_sepV65qQUNq9QbO4FEvE7xc71jp9r2yXtCl-K9QlqPmVctaRGI5q7dOr1xEDxgzmkUjs9mfrtcFQ9o')`;

  quickLinks = [
    { icon: 'calendar_month', title: 'Booking Issues', desc: 'Ticket & downloads' },
    { icon: 'currency_rupee', title: 'Donations', desc: 'Receipts & tax info' },
    { icon: 'schedule', title: 'Timings & Rules', desc: 'Darshan schedule' }
  ];

  faqs = [
    {
      q: 'How do I download my Darshan ticket?',
      a: 'Go to My Bookings and download the PDF ticket.'
    },
    {
      q: 'Is there a dress code?',
      a: 'Traditional attire is mandatory for entry.'
    },
    {
      q: 'Are donations tax deductible?',
      a: 'Yes, under section 80G.'
    }
  ];

}
