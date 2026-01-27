import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

type EventType = 'Pujas' | 'Festivals' | 'Cultural' | 'Education' | 'All';
type LocationType =
  | 'All Locations'
  | 'Main Temple'
  | 'North Hall'
  | 'Garden'
  | 'Main Temple Hall'
  | 'Library'
  | 'Yoga Hall';

interface Program {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  description: string;
  image: string;
  isFeatured?: boolean;
}

@Component({
  selector: 'app-programs',
  imports: [CommonModule, FormsModule, Header, Footer],
  templateUrl: './programs.html',
  styleUrl: './programs.css',
})
export class Programs {
  selectedEvent: EventType = 'All';
  selectedLocation: LocationType = 'All Locations';
  viewType: 'list' | 'calendar' = 'list';
  currentMonth: 'This Month' | 'Next Month' | 'All' = 'This Month';

  programs: Program[] = [
    {
      id: 1,
      title: 'Maha Shivaratri 2024',
      date: 'Mar 08',
      time: '6:00 PM - 4:00 AM',
      location: 'Main Temple Hall',
      category: 'Festivals',
      description:
        'A night of worship and meditation featuring Rudrabhishekam, chanting, and discourse.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAew09jAbq4rXWQIkmJ_SSjjw7oVKOqJe5yL1CZHBbF6oozM8D4-Yw3hSelcIiNd821DdMVSHdJU7vCQbp2Pa7XMqMd3es-bbOZMdHAlRz1jdmeMQe-Z1Xbz1LBIGiYlyWv4LczL9Ev_Y9Y2uNflyhIieVUhVtunXxhAHU0qwqrOPHWeEsFoK3Ka0jBqIw2x1FxC4bckBVlYJuBdbuOo1JztvjjEiJzbmbLYWgzAVFzVA0irlDkOkzuwtJe-VJPD-zsZDdubGaqsa5n',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Weekly Ganesh Puja',
      date: 'Mar 12',
      time: '10:00 AM',
      location: 'North Hall',
      category: 'Pujas',
      description:
        'Join us every Tuesday for Ganesh Puja and obstacle-removal prayers.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsGGIr6JA9O8T8I_mZUH6n4Pn3ObrLQllq6i-3wSz6e1x8MyLZEJOWNGATrFksdJFTI7LRaYYkqL2nQg7sqEkpQeyEQWfNG5rb0JOZC_BwXPGxTeS_xUsDO0r_2EMCcbxCu6QigL72kbrJC1pQnewwmpq8cNvOlwZ09cUwaf2O1tUqIzRflhcljY3ucSdy05QK8oyrPEUvPh4Qt1Lsspnm-21gSGphfmeFcN6DcWsB-VxDM8PT7TBRwbnO_oMZ0iSPsZAHm_sJYb7U'
    },
    {
      id: 3,
      title: 'Morning Yoga & Meditation',
      date: 'Mar 15',
      time: '07:00 AM',
      location: 'Garden',
      category: 'Education',
      description:
        'Start your day with serenity. Open to all levels.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDzeVEzHaS8GylMDZ0dady5u9WKx10vX7K9ZwpR4HIRuWxbqOKS_kIigV9eU2vcbKYWnG7MjCbVueXib5P3vk9GjfbMCXSLy6sDXB0F59wBTcw-Wn4yG8U-ky74quCw5-pdoRtY_VfFn49LUULZt94n7kunm799pn269Xa5GpM6ePH3BGX29O19tIoJDG1PCRZCmaMViwh4anHhdsNBFNTYAYgJ7J-jFCRPlsOGw49R7ni6xWYCfv-GEw-So5-gxo_J07S_tW071Jd'
    },
    {
      id: 4,
      title: 'Ram Navami Celebration',
      date: 'Mar 22',
      time: '8:00 AM - 12:00 PM',
      location: 'Main Temple',
      category: 'Festivals',
      description:
        'Celebrate the birth anniversary of Lord Rama with special prayers and bhajans.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP1n0Q_TeZytwag62HJEky-8FAJObFa9-wN_G-vn5w0wTvrF2q86_2TSGcgMWJmh1m08e-d1glYO9dotcfRUXII0Lt7Nj2p2HvlePZZl8DNMyIJK2WAQdH3sAxOykPx5jnzGRNY5J_j4ZxwhzkIDTyfawogpxF6E67un4CpUGi-ktu0-zEpuMaNqc_VXQMDXBEajy9hkChFPgjlMD6-rRwAZUwEPkKAzhfvliA21zDUOhlpMOGCzsJW9DvQ7qHmRRKjzvLUz6lGo-Z'
    },
    {
      id: 5,
      title: 'Bhagavad Gita Study',
      date: 'Mar 25',
      time: '6:30 PM',
      location: 'Library',
      category: 'Education',
      description:
        'Weekly study session on Bhagavad Gita with learned scholars.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'Cultural Dance Performance',
      date: 'Mar 28',
      time: '7:00 PM',
      location: 'Main Temple Hall',
      category: 'Cultural',
      description:
        'Traditional dance performances showcasing our rich cultural heritage.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop'
    }
  ];

  get featuredProgram(): Program | undefined {
    return this.programs.find(p => p.isFeatured);
  }

  get filteredPrograms(): Program[] {
    let result = [...this.programs];

    if (this.selectedEvent !== 'All') {
      result = result.filter(p => p.category === this.selectedEvent);
    }

    if (this.selectedLocation !== 'All Locations') {
      result = result.filter(p => p.location === this.selectedLocation);
    }

    return result;
  }

  trackByProgramId(index: number, program: Program): number {
    return program.id;
  }
}
