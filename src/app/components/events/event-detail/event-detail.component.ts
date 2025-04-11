import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/modal/event.modal';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  event!: Event | null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    try {
      const existing = this.eventService.getEventById(+id);
      console.log(existing);
      if (existing) {
        this.event = { ...existing };
      console.log(this.event);
        this.isLoading = false;
      }
        }
     catch(err){
      console.error('Error loading event details', err);
        this.isLoading = false;
        this.router.navigate(['/event-list']);
    }
  }

  goBack() {
    this.router.navigate(['/event-list']);
  }
}

