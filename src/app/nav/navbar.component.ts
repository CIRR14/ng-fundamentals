import { Component } from '@angular/core';
import { EventService } from '../events/shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;},
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display: none}}
    li > a.active { color: #F97924; }
  `]
})

export class NavBarComponent {
  event: any;
  events: any[];
  constructor( private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }
}
