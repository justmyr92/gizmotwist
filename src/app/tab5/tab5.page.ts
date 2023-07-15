import { Component, OnInit, NgZone } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  constructor(private dataService: DataService, private ngZone: NgZone) {}
  username = '';
  theme = 'Light Mode';
  darkMode: boolean = false;
  toggleDarkMode(isChecked: boolean) {
    this.darkMode = isChecked;
    localStorage.setItem('darkMode', this.darkMode.toString());
    if (this.darkMode) {
      document.body.setAttribute('color-theme', 'dark');
      this.theme = 'Dark Mode';
    } else {
      document.body.removeAttribute('color-theme');
      this.theme = 'Light Mode';
    }
  }
  ngOnInit() {
    let user = localStorage.getItem('userId');

    for (let i = 0; i < this.dataService.userData.length; i++) {
      if (this.dataService.userData[i].userId == user) {
        this.username = this.dataService.userData[i].username;
      }
    }

    if (localStorage.getItem('darkMode') == 'true') {
      this.toggleDarkMode(true);
    }
  }
}
