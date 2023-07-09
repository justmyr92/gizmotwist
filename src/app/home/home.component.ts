/** @format */

import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transactions: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction() {
    let userID = localStorage.getItem('userId')?.toString();
    if (userID) {
      this.transactions = this.dataService.getTransactions(userID, 3);
    }
  }
}
