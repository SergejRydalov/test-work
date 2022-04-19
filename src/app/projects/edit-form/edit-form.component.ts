import {Component, Input, OnInit} from '@angular/core';
import {AppService, Project} from "../../service/app.service";
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  @Input() project: Project | undefined;

  editForm =  this.fb.group({
    subject: this.fb.control('', Validators.required),
    startDate: this.fb.control('', Validators.required),
    endDate: this.fb.control('', Validators.required),
    createdBy: this.fb.control('', Validators.required),
    description: this.fb.control('', Validators.required),
  })

  constructor( public fb: FormBuilder, private appService: AppService) { }

  ngOnInit(): void {
    this.project && this.editForm.patchValue(this.project);
  }

  save() {
    this.editForm.markAllAsTouched();
    if (this.editForm.valid && this.project) {
      Object.assign(this.project, this.editForm.value);
      this.appService.saveProject(this.project);
      this.cancel();
    }
  }

  isValid(control: AbstractControl | null): boolean {
    return Boolean(control && control?.touched && control?.invalid);
  }

  cancel() {
    this.appService.setEditProject(null);
  }
}
