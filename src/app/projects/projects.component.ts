import { Component, OnInit } from '@angular/core';
import { AppService, Project } from '../service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit {

  projectList: Project[] = [];
  emptyArea: boolean = true;
  selectedId: string = '';

  constructor(public appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.projectList = this.appService.getProjectList();
  }

  openProject(project: Project) {
    this.selectedId = project.id;
    this.router.navigate(['/projects', project.id]);
  }

  onActivate() {
    this.emptyArea = false;
  }
}
