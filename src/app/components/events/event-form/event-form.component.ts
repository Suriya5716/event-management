import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/modal/event.modal';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent implements OnInit {
  event: Event = { id: 0, title: '', date: '', location: '', description: '' };
  isEdit = false;
  eventForm?: any;
  pageTitle:string =''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService,
    private fb: FormBuilder,
    private toasterService:ToastrService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      const existing = this.eventService.getEventById(+id);
      if (existing) {
        this.event = { ...existing };
        this.isEdit = true;
      }
    }
    this.pageTitle = this.isEdit?"Edit Event":"Add Event"
    this.createForm();
  }

  createForm() {
    this.eventForm = this.fb.group({
      title: [this.event.title, [Validators.required]],
      date: [this.event.date, [Validators.required]],
      location: [this.event.location, [Validators.required]],
      description: [
        this.event.description,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(500),
        ],
      ],
    });
  }

  onSubmit() {
    if (this.eventForm?.valid) {
      this.event = {
        id: this.event.id ? this.event.id : 0,
        title: this.eventForm.value.title,
        date: this.eventForm.value.date,
        location: this.eventForm.value.location,
        description: this.eventForm.value.description,
      };
      if (this.isEdit) {
        this.eventService.updateEvent(this.event);
        this.toasterService.success('Event updated successfully!', 'Success');
      } else {
        this.eventService.addEvent(this.event);
        this.toasterService.success('Event added successfully!', 'Success');
      }
        this.router.navigate(['/'])
    }
  }

  redirecttolist(){
    this.router.navigate(['/'])

  }
}
