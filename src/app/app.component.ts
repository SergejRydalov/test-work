import { Component } from '@angular/core';
import { ChildrenOutletContexts } from "@angular/router";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("routeAnimations", [
      transition('* <=> *', [
        style({ opacity: 0 }), animate('0.6s ease-in-out', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class AppComponent {
  constructor(private outletContexts: ChildrenOutletContexts) { }

  changeRoute() {
    return this.outletContexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
