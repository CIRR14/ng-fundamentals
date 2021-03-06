import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';


@Component({
  template: `
      <div>
      <h1> Upcoming Angular Events </h1>
      <hr/>
        <div class="row">
          <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail class="thumbnail" (click)="handleThumbnailClick(event.name)" [event] = "event"> </event-thumbnail>
          </div>
        </div>
      </div>
  `,
  styles: [
    '.thumbnail { min-height: 210px; }',
    '.pad-left { margin-left: 10px; }',
    '.well div { color: #bbb; }'
   ]
})
export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
  }
  ngOnInit() {
     this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }
}
