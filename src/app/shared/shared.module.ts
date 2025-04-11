
import { NgModule } from '@angular/core';
import { EventFormComponent } from '../components/events/event-form/event-form.component';
import { EventDetailComponent } from '../components/events/event-detail/event-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from '../components/events/event-list/event-list.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { MatPaginatorModule } from '@angular/material/paginator';

export const components = [
    EventFormComponent,
    EventDetailComponent,
    EventListComponent
]

export const modules =[
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatPaginatorModule,
  FormsModule,
  CommonModule,
  MatIconModule,
  ReactiveFormsModule,
  ToastrModule,
]

@NgModule({
  declarations: [
    components
  ],

  imports: [
    modules,
    // BrowserAnimationsModule
  ],
  exports: [ ...components, ...modules],

})
export class sharedModule { }
