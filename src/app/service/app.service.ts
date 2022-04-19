import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

export type Project = {
  id: string;
  subject: string;
  description: string;
  createdBy: string;
  startDate: string;
  endDate: string;
  cost: number;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private projectList: Project[] = [];

  private editProject: Subject<Project | null> = new Subject<Project | null>();
  public editProject$: Observable<Project | null> = this.editProject.asObservable();

  setEditProject(project: Project | null) {
    this.editProject.next(project);
  }

  saveProject(project: Project) {
    const index = this.projectList.findIndex( item => item.id === project.id);
    this.projectList.splice(index, 1, project);
    const projects = JSON.stringify({ Projects: this.projectList });
    localStorage.setItem('projectList', projects);
  }

  getProjectList(): Project[] {
    const data = localStorage.getItem('projectList');
    this.projectList = data ? JSON.parse(data)['Projects'] : [];
    return this.projectList;
  }

  getProject(id: string): Project | null {
    return this.projectList.find(item => item.id === id) ?? null;
  }

  saveProjectList(projects: string): boolean {
    try {
      JSON.parse(projects);
      localStorage.setItem('projectList', projects);
    } catch (e) {
      return false;
    }
    return true;
  }
}
