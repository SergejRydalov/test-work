import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {AppService} from "../service/app.service";

@Component({
  selector: 'data-create',
  templateUrl: './data-create.component.html',
  styleUrls: ['./data-create.component.css']
})
export class DataCreateComponent {

  textArea = new FormControl('', []);

  constructor(private router: Router, private appService: AppService) { }

  save(value: string) {
    this.appService.saveProjectList(value)
      ? this.router.navigate(['/projects'])
      : this.textArea.setErrors({invalidText: true});
  }
}
