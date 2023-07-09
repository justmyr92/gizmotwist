/** @format */

import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';
@Component({
    selector: 'app-tab6',
    templateUrl: './tab6.page.html',
    styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {
    constructor(private dataService: DataService, private router: Router) {}

    ngOnInit() {}

    logout() {
        this.dataService.logoutUser();
        this.router.navigate(['/login']);
    }
}
