import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService, Project} from "../../service/app.service";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
  animations: [
    trigger("cardAnimations", [
      transition(':increment, :enter', [
        style({ opacity: 0 }), animate('0.6s ease-in-out', style({ opacity: 1 }))
      ]),
    ]),
  ],
})
export class ProjectCardComponent implements OnInit {

  project: Project | null = null;
  state: number = 0;

  constructor(private  activeRoute: ActivatedRoute, private appService: AppService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(value => {
      this.state++;
      this.project = this.appService.getProject(value.id)

    });
  }

  editProject(project: Project) {
    this.appService.setEditProject(project);
  }
}
