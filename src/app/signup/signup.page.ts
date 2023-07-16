/** @format */

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  errorMessage: string = '';
  isIncorrect: boolean = false;

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  isParticipated: boolean = false;

  constructor(private router: Router, private dataService: DataService) {}

  signup() {
    if (this.password != '' && this.confirmPassword != '' && this.email != '') {
      if (this.password === this.confirmPassword) {
        if (this.dataService.checkEmail(this.email)) {
          this.errorMessage = 'Email address already used.';
          this.isIncorrect = true;
        } else {
          this.dataService.addUser(
            this.email,
            this.password,
            this.isParticipated
          );
          this.router.navigate(['/login']);
        }
      } else {
        this.errorMessage = "Password doesn't match.";
        this.isIncorrect = true;
      }
    } else {
      this.errorMessage = 'Fill out all missing values.';
      this.isIncorrect = true;
    }
  }
  ngOnInit() {
    if (localStorage.getItem('userId') != null) {
      this.router.navigate(['/tabs/tab1']);
    }
    if (localStorage.getItem('darkMode') == 'true') {
      this.dataService.toggleDarkMode(true);
    }
  }
}
