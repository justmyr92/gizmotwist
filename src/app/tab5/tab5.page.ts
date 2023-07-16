import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}
  username = '';
  darkMode: boolean = false;
  ionViewWillEnter() {
    this.darkMode = localStorage.getItem('darkMode')?.toString() == 'true';
  }

  ngOnInit() {
    let user = localStorage.getItem('userId');

    for (let i = 0; i < this.dataService.userData.length; i++) {
      if (this.dataService.userData[i].userId == user) {
        this.username = this.dataService.userData[i].username;
      }
    }

    if (localStorage.getItem('darkMode') == 'true') {
      this.dataService.toggleDarkMode(true);
    }
  }

  toggleDarkMode(isChecked: boolean) {
    this.dataService.toggleDarkMode(isChecked);
  }

  logout() {
    localStorage.removeItem('userId');
    this.router.navigate(['/login']);
  }
}
