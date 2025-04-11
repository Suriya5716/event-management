import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/modal/event.modal';
import { EventService } from 'src/app/service/event.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  searchTerm = '';
  dataSource: MatTableDataSource<Event> = new MatTableDataSource<Event>();
  pagedEvents: any = [];

  constructor(
    private eventService: EventService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.updateFilteredEvents();
  }

  deleteEvent(id: number) {
    this.eventService.deleteEvent(id);
    this.events = this.events.filter((e) => e.id !== id);
    this.toastr.success('Event deleted successfully!', 'Success');
    this.updateFilteredEvents();
  }

  addeditEvent(isfrom?: string, id?: number) {
    if (isfrom == 'add') {
      this.router.navigate(['/event-list/add']);
    } else {
      this.router.navigate(['/event-list/edit', id]);
    }
  }

  redirecttoDetails(id?: number) {
    this.router.navigate(['/event-list/details', id]);
  }

  filteredEvents(): Event[] {
    return this.events.filter(
      (e) =>
        e.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        e.location.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  updateFilteredEvents() {
    const filtered = this.filteredEvents();
    this.dataSource.data = filtered;
    this.onPageChanged({ pageIndex: 0, pageSize: 5 });
  }

  onPageChanged(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedEvents = this.dataSource.data.slice(startIndex, endIndex);
  }

  onSearchChange() {
    this.updateFilteredEvents();
  }
}
