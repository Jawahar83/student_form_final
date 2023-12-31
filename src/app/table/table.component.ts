import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../student';
import { StudentServiceService } from '../student-service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  studentForm: FormGroup;
  message: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: StudentServiceService
  ) {
    this.studentForm = this.formBuilder.group({
      rollNo: ['', [Validators.required, Validators.minLength(7)]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      gender: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  public registernow() {
    if (this.studentForm.valid) {
      let resp = this.service.doregistration(this.studentForm.value);
      resp.subscribe((data) => (this.message = data));
    } else {
      // mark all form controls as touched to show validation errors
      Object.values(this.studentForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}