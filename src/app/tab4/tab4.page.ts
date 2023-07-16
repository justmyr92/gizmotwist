import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {
  Chart,
  LinearScale,
  LineController,
  CategoryScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  constructor(private dataService: DataService) {}

  labels: any[] = [];
  solveTimes: number[] = [];
  solveDates: string[] = [];
  analytics: any = null;

  ngOnInit() {
    if (localStorage.getItem('darkMode') == 'true') {
      this.dataService.toggleDarkMode(true);
    }
  }

  ionViewWillEnter() {
    this.renderChart();
    this.analytics = this.dataService.getAnalytics();
    console.log(this.analytics);
  }

  renderChart() {
    this.solveTimes = [];
    this.solveDates = [];
    let user = localStorage.getItem('userId');

    let solvesArray = this.dataService.getSolves(Number(user));
    for (const solves of solvesArray) {
      for (const solve of solves) {
        const date = new Date(solve.date);
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        const day = date.getDate();
        const formattedDate = `${month} ${day}`;
        if (solve.time != 'DNF') {
          this.solveTimes.push(parseFloat(solve.time));
          this.solveDates.push(formattedDate);
        }
      }
    }
    Chart.register(
      LinearScale,
      LineController,
      CategoryScale,
      PointElement,
      LineElement
    );
    const canvas = document.getElementById('lineChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      Chart.getChart(ctx)?.destroy();

      const lineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.solveDates,
          datasets: [
            {
              label: 'Solve Times',
              data: this.solveTimes,
              borderColor: 'blue',
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
}
