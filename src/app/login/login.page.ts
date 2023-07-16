/** @format */

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isIncorrect: boolean = false;
  errorMessage: string = '';

  email: string = '';
  password: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('userId') != null) {
      this.router.navigate(['/tabs/tab1']);
    }
    if (localStorage.getItem('darkMode') == 'true') {
      this.dataService.toggleDarkMode(true);
    }
  }

  login() {
    if (this.email != '' && this.password != '') {
      if (this.dataService.login(this.email, this.password)) {
        this.router.navigate(['/tabs/tab1']);
      } else {
        this.isIncorrect = true;
        this.errorMessage = 'Incorrect email address and password';
      }
    } else {
      this.errorMessage = 'Fill out all missing values.';
      this.isIncorrect = true;
    }
  }
}
