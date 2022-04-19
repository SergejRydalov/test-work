import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataCreateComponent } from './data-create/data-create.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from "./projects/project-card/project-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


const routes: Routes = [
  {
    path: 'data',
    component: DataCreateComponent,
    data: { animation: 'data' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'projects' },
    children: [{
      path: ':id',
      component: ProjectCardComponent,
    }]
  },
  { path: '', redirectTo: '/data', pathMatch: 'full' },
  { path: '**', redirectTo: '/data' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserAnimationsModule,],
  exports: [RouterModule]
})
export class AppRoutingModule { }
