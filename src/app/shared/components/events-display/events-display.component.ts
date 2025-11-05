import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-events-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-display.component.html',
  styles: ``
})
export class EventsDisplayComponent {
  events = [
    {
      title: 'Tech Conference 2025',
      description: 'Annual technology conference featuring the latest in AI and ML.',
      date: 'Nov 15, 2025',
      time: '09:00',
      location: 'Convention Center, San Francisco',
      participants: 120,
      capacity: 500
    },
    {
      title: 'Design Meetup',
      description: 'A meetup for designers focusing on UX trends and tools.',
      date: 'Nov 22, 2025',
      time: '11:00',
      location: 'NYC Design Hub',
      participants: 80,
      capacity: 200
    },
    {
      title: 'Startup Pitch Day',
      description: 'Pitch your startup idea to top investors and mentors.',
      date: 'Dec 1, 2025',
      time: '10:00',
      location: 'Silicon Valley, CA',
      participants: 300,
      capacity: 1000
    },
    {
      title: 'Cybersecurity Summit',
      description: 'Discuss the latest challenges and innovations in cybersecurity.',
      date: 'Dec 5, 2025',
      time: '09:30',
      location: 'Boston Tech Center',
      participants: 150,
      capacity: 400
    },
    {
      title: 'Cloud Expo',
      description: 'Explore cloud computing technologies and architectures.',
      date: 'Dec 12, 2025',
      time: '14:00',
      location: 'Seattle Convention Hall',
      participants: 220,
      capacity: 600
    },
    {
      title: 'DevOps Conference',
      description: 'Meet top DevOps experts and learn modern CI/CD practices.',
      date: 'Dec 20, 2025',
      time: '13:00',
      location: 'Chicago Tech Center',
      participants: 250,
      capacity: 800
    }
  ];

  currentIndex = 0;
  visibleEvents: any[] = [];

  ngOnInit() {
    this.updateVisibleEvents();
  }

  updateVisibleEvents() {
    this.visibleEvents = this.events.slice(this.currentIndex, this.currentIndex + 3);
  }

  next() {
    if (this.currentIndex < this.events.length - 3) {
      this.currentIndex++;
      this.updateVisibleEvents();
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleEvents();
    }
  }
}
