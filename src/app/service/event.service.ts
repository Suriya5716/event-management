import { Injectable } from '@angular/core';
import { Event } from '../modal/event.modal';

@Injectable({ providedIn: 'root' })
export class EventService {
  private eventsUrl = 'assets/event.json';
  private events: Event[] = [
    {
      id: 1,
      title: 'Angular Meetup',
      date: '2025-04-15',
      location: 'Chennai',
      description: 'Intro to Angular'
    },
    {
      id: 2,
      title: 'AI & Cloud Conference',
      date: '2025-05-10',
      location: 'Bengaluru',
      description: 'Explore the latest in AI and Cloud technology'
    },
    {
      id: 3,
      title: 'React Native Workshop',
      date: '2025-06-01',
      location: 'Mumbai',
      description: 'Hands-on workshop for mobile developers'
    },
    {
      id: 4,
      title: 'JavaScript Summit',
      date: '2025-06-20',
      location: 'Namakkal',
      description: 'Deep dive into modern JS frameworks'
    },
    {
      id: 5,
      title: 'Web3 Expo',
      date: '2025-07-05',
      location: 'Salem',
      description: 'Blockchain and decentralized web technologies'
    },
    {
      id: 6,
      title: 'DevOps Bootcamp',
      date: '2025-07-18',
      location: 'Delhi',
      description: 'CI/CD, Docker, Kubernetes and more'
    },
    {
      id: 7,
      title: 'Cybersecurity Essentials',
      date: '2025-08-10',
      location: 'Hyderabad',
      description: 'Protecting systems and data in the modern world'
    },
    {
      id: 8,
      title: 'UX/UI Design Conference',
      date: '2025-08-25',
      location: 'Kolkata',
      description: 'Trends and techniques in digital product design'
    },
    {
      id: 9,
      title: 'Python Data Science Day',
      date: '2025-09-12',
      location: 'Hyderabad',
      description: 'Pandas, NumPy, machine learning, and more'
    },
    {
      id: 10,
      title: 'Mobile Tech Talks',
      date: '2025-09-30',
      location: 'Chennai',
      description: 'Everything mobile: iOS, Android, Flutter'
    }
  ];

  getEvents(): Event[] {
    return this.events;
  }

  getEventById(id: number): Event | undefined {
    return this.events.find(event => event.id === id);
  }

  addEvent(event: Event) {
    event.id = Date.now();
    this.events.unshift(event);
  }

  updateEvent(updatedEvent: Event) {
    const index = this.events.findIndex(e => e.id === updatedEvent.id);
    if (index !== -1) this.events[index] = updatedEvent;
  }

  deleteEvent(id: number) {
    this.events = this.events.filter(e => e.id !== id);
  }
}