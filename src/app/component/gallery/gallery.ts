import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

interface GalleryItem {
  id: number;
  title: string;
  category: 'Architecture' | 'Festivals' | 'Deities' | 'Videos' | 'Ceremonies';
  imageUrl: string;
  location?: string;
  type: 'image' | 'video';
  createdAt: Date;
  popularity: number; // likes / views
}

@Component({
  selector: 'app-gallery',
  imports: [ CommonModule, Header, Footer ],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  readonly tabs = [
    'All',
    'Architecture',
    'Festivals',
    'Deities',
    'Videos',
    'Ceremonies'
  ] as const;

 activeTab = signal<string>('All');
  sortBy = signal<'Popular' | 'Newest' | 'Oldest'>('Popular');

  galleryItems = signal<GalleryItem[]>([
    {
      id: 1,
      title: 'Golden Temple at Night',
      category: 'Architecture',
      imageUrl: 'https://media.istockphoto.com/id/504746394/photo/awsome-sikh-golden-temple-at-night-amritsar-india.jpg?s=612x612&w=0&k=20&c=2sY9VHVtd3StSvE-x3MmRLMvElJ2CBQweVD0jwZQMJc=',
      type: 'image',
      createdAt: new Date('2024-05-10'),
      popularity: 950
    },
    {
      id: 2,
      title: 'Ganga Aarti',
      category: 'Festivals',
      imageUrl: 'https://assets.artworkarchive.com/image/upload/t_jpg_large/v1/user_58289/IPS-A13638-GangaAarti1-Haridwar_iztdvn',
      type: 'video',
      createdAt: new Date('2024-06-01'),
      popularity: 1200
    },
    {
      id: 3,
      title: 'Temple Deity',
      category: 'Deities',
      imageUrl: 'https://media.istockphoto.com/id/655235152/photo/hindu-god-statue-lord-shiva-sculpture-sitting-in-meditation-india-2011.jpg?s=612x612&w=0&k=20&c=P6PjGI9ZXxF1_3BebDrxK5etDM7JM4VFvNPJLm2dvYU=',
      type: 'image',
      createdAt: new Date('2024-04-15'),
      popularity: 800
    }
  ]);

  /* ---------------- FILTER + SORT LOGIC ---------------- */
  filteredGallery = computed(() => {
    let items = this.galleryItems();

    // Filter by tab
    if (this.activeTab() !== 'All') {
      items = items.filter(
        item => item.category === this.activeTab()
      );
    }

    // Sorting
    switch (this.sortBy()) {
      case 'Newest':
        items = [...items].sort(
          (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
        );
        break;

      case 'Oldest':
        items = [...items].sort(
          (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
        );
        break;

      case 'Popular':
        items = [...items].sort(
          (a, b) => b.popularity - a.popularity
        );
        break;
    }

    return items;
  });

  trackById(index: number, item: GalleryItem) {
  return item.id;
}


  /* ---------------- UI ACTIONS ---------------- */
  setTab(tab: string) {
    this.activeTab.set(tab);
  }

  setSort(value: 'Popular' | 'Newest' | 'Oldest') {
    this.sortBy.set(value);
  }
}
