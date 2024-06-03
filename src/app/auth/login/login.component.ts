import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  route = inject(Router);
  isExistUser: boolean = false;
  submitted: boolean = false;
  loginForm: FormGroup[] | any;

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get getControl(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  doLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) return;
    this.submitted = false;
  }
}
