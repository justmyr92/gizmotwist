/** @format */

import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  selectedCategory: string = "3x3x3 Rubik's Cube";
  solves: any = [];

  constructor(private dataService: DataService) {
    this.getSelectedCategory();
  }

  ngOnInit() {
    this.dataService.solvesChange.subscribe((solves: []) => {
      this.solves = solves;
    });

    if (localStorage.getItem('darkMode') == 'true') {
      this.dataService.toggleDarkMode(true);
    }
  }

  getSelectedCategory() {
    let userId = Number(localStorage.getItem('userId'));
    this.solves = this.dataService.getSolveByCategory(
      userId,
      this.selectedCategory
    );
    console.log(this.solves);
  }

  onSelectionChange() {
    this.getSelectedCategory();
  }
}
