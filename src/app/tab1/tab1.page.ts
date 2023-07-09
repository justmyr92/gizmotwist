/** @format */

import {Component, HostListener} from '@angular/core';
import {DataService} from '../services/data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
    constructor(private dataService: DataService, private router: Router) {}

    scramble: string = '';

    cube: string[][] = [
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
        ['O', 'O', 'O', 'G', 'G', 'G', 'R', 'R', 'R', 'B', 'B', 'B'],
        ['O', 'O', 'O', 'G', 'G', 'G', 'R', 'R', 'R', 'B', 'B', 'B'],
        ['O', 'O', 'O', 'G', 'G', 'G', 'R', 'R', 'R', 'B', 'B', 'B'],
        [' ', ' ', ' ', 'Y', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'Y', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'Y', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
    ];

    notation = ['F', 'B', 'U', 'D', 'L', 'R'];

    ngOnInit() {
        this.generateScramble();
    }

    resetCube() {
        this.cube = [
            [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' '],
            ['O', 'O', 'O', 'G', 'G', 'G', 'R', 'R', 'R', 'B', 'B', 'B'],
            ['O', 'O', 'O', 'G', 'G', 'G', 'R', 'R', 'R', 'B', 'B', 'B'],
            ['O', 'O', 'O', 'G', 'G', 'G', 'R', 'R', 'R', 'B', 'B', 'B'],
            [' ', ' ', ' ', 'Y', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'Y', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', 'Y', 'Y', 'Y', ' ', ' ', ' ', ' ', ' ', ' '],
        ];
    }

    generateScramble() {
        this.resetCube();
        this.scramble = '';
        const num = Math.floor(Math.random() * 5) + 18;
        let last = '';

        const modifiers = ['2', "'"]; // Modifiers array without space

        for (let i = 0; i < num; i++) {
            let pick = Math.floor(Math.random() * 6);
            while (this.notation[pick] == last) {
                pick = Math.floor(Math.random() * 6);
            }
            last = this.notation[pick];

            // Select a random modifier from the modifiers array
            let modifier =
                modifiers[Math.floor(Math.random() * modifiers.length)];

            this.scramble += this.notation[pick] + modifier + ' ';
        }

        this.scrambleCube();
        this.printCube();
    }

    rNotation() {
        var temp = this.cube[0][5];
        this.cube[0][5] = this.cube[3][5];
        this.cube[3][5] = this.cube[6][5];
        this.cube[6][5] = this.cube[5][9];
        this.cube[5][9] = temp;
        var temp2 = this.cube[1][5];
        this.cube[1][5] = this.cube[4][5];
        this.cube[4][5] = this.cube[7][5];
        this.cube[7][5] = this.cube[4][9];
        this.cube[4][9] = temp2;
        var temp3 = this.cube[2][5];
        this.cube[2][5] = this.cube[5][5];
        this.cube[5][5] = this.cube[8][5];
        this.cube[8][5] = this.cube[3][9];
        this.cube[3][9] = temp3;
        var temp4 = this.cube[3][6];
        this.cube[3][6] = this.cube[5][6];
        this.cube[5][6] = this.cube[5][8];
        this.cube[5][8] = this.cube[3][8];
        this.cube[3][8] = temp4;
        var temp5 = this.cube[3][7];
        this.cube[3][7] = this.cube[4][6];
        this.cube[4][6] = this.cube[5][7];
        this.cube[5][7] = this.cube[4][8];
        this.cube[4][8] = temp5;
    }
    lNotation() {
        // Swap algorithm for the L move
        var temp1 = this.cube[5][11];
        this.cube[5][11] = this.cube[6][3];
        this.cube[6][3] = this.cube[3][3];
        this.cube[3][3] = this.cube[0][3];
        this.cube[0][3] = temp1;
        var temp2 = this.cube[4][11];
        this.cube[4][11] = this.cube[7][3];
        this.cube[7][3] = this.cube[4][3];
        this.cube[4][3] = this.cube[1][3];
        this.cube[1][3] = temp2;
        var temp3 = this.cube[3][11];
        this.cube[3][11] = this.cube[8][3];
        this.cube[8][3] = this.cube[5][3];
        this.cube[5][3] = this.cube[2][3];
        this.cube[2][3] = temp3;
        var temp4 = this.cube[3][0];
        this.cube[3][0] = this.cube[5][0];
        this.cube[5][0] = this.cube[5][2];
        this.cube[5][2] = this.cube[3][2];
        this.cube[3][2] = temp4;
        var temp5 = this.cube[3][1];
        this.cube[3][1] = this.cube[4][0];
        this.cube[4][0] = this.cube[5][1];
        this.cube[5][1] = this.cube[4][2];
        this.cube[4][2] = temp5;
    }
    uNotation() {
        var temp1 = this.cube[3][0];
        this.cube[3][0] = this.cube[3][3];
        this.cube[3][3] = this.cube[3][6];
        this.cube[3][6] = this.cube[3][9];
        this.cube[3][9] = temp1;
        var temp2 = this.cube[3][1];
        this.cube[3][1] = this.cube[3][4];
        this.cube[3][4] = this.cube[3][7];
        this.cube[3][7] = this.cube[3][10];
        this.cube[3][10] = temp2;
        var temp3 = this.cube[3][2];
        this.cube[3][2] = this.cube[3][5];
        this.cube[3][5] = this.cube[3][8];
        this.cube[3][8] = this.cube[3][11];
        this.cube[3][11] = temp3;
        var temp4 = this.cube[2][5];
        this.cube[2][5] = this.cube[0][5];
        this.cube[0][5] = this.cube[0][3];
        this.cube[0][3] = this.cube[2][3];
        this.cube[2][3] = temp4;
        var temp5 = this.cube[2][4];
        this.cube[2][4] = this.cube[1][5];
        this.cube[1][5] = this.cube[0][4];
        this.cube[0][4] = this.cube[1][3];
        this.cube[1][3] = temp5;
    }
    dNotation() {
        //50 to 53 to 56 59 in reerser order
        var temp1 = this.cube[5][9];
        this.cube[5][9] = this.cube[5][6];
        this.cube[5][6] = this.cube[5][3];
        this.cube[5][3] = this.cube[5][0];
        this.cube[5][0] = temp1;
        var temp2 = this.cube[5][10];
        this.cube[5][10] = this.cube[5][7];
        this.cube[5][7] = this.cube[5][4];
        this.cube[5][4] = this.cube[5][1];
        this.cube[5][1] = temp2;
        var temp3 = this.cube[5][11];
        this.cube[5][11] = this.cube[5][8];
        this.cube[5][8] = this.cube[5][5];
        this.cube[5][5] = this.cube[5][2];
        this.cube[5][2] = temp3;
        var temp4 = this.cube[6][3];
        this.cube[6][3] = this.cube[8][3];
        this.cube[8][3] = this.cube[8][5];
        this.cube[8][5] = this.cube[6][5];
        this.cube[6][5] = temp4;
        var temp5 = this.cube[7][3];
        this.cube[7][3] = this.cube[8][4];
        this.cube[8][4] = this.cube[7][5];
        this.cube[7][5] = this.cube[6][4];
        this.cube[6][4] = temp5;
    }
    fNotation() {
        var temp1 = this.cube[3][2];
        this.cube[3][2] = this.cube[6][3];
        this.cube[6][3] = this.cube[5][6];
        this.cube[5][6] = this.cube[2][5];
        this.cube[2][5] = temp1;
        var temp2 = this.cube[2][4];
        this.cube[2][4] = this.cube[4][2];
        this.cube[4][2] = this.cube[6][4];
        this.cube[6][4] = this.cube[4][6];
        this.cube[4][6] = temp2;
        var temp3 = this.cube[2][3];
        this.cube[2][3] = this.cube[5][2];
        this.cube[5][2] = this.cube[6][5];
        this.cube[6][5] = this.cube[3][6];
        this.cube[3][6] = temp3;
        var temp4 = this.cube[3][3];
        this.cube[3][3] = this.cube[5][3];
        this.cube[5][3] = this.cube[5][5];
        this.cube[5][5] = this.cube[3][5];
        this.cube[3][5] = temp4;
        var temp5 = this.cube[3][4];
        this.cube[3][4] = this.cube[4][3];
        this.cube[4][3] = this.cube[5][4];
        this.cube[5][4] = this.cube[4][5];
        this.cube[4][5] = temp5;
    }
    bNotation() {
        var temp1 = this.cube[3][9];
        this.cube[3][9] = this.cube[5][9];
        this.cube[5][9] = this.cube[5][11];
        this.cube[5][11] = this.cube[3][11];
        this.cube[3][11] = temp1;
        var temp2 = this.cube[3][10];
        this.cube[3][10] = this.cube[4][9];
        this.cube[4][9] = this.cube[5][10];
        this.cube[5][10] = this.cube[4][11];
        this.cube[4][11] = temp2;
        var temp3 = this.cube[3][8];
        this.cube[3][8] = this.cube[8][5];
        this.cube[8][5] = this.cube[5][0];
        this.cube[5][0] = this.cube[0][3];
        this.cube[0][3] = temp3;
        var temp4 = this.cube[4][8];
        this.cube[4][8] = this.cube[8][4];
        this.cube[8][4] = this.cube[4][0];
        this.cube[4][0] = this.cube[0][4];
        this.cube[0][4] = temp4;
        var temp5 = this.cube[5][8];
        this.cube[5][8] = this.cube[8][3];
        this.cube[8][3] = this.cube[3][0];
        this.cube[3][0] = this.cube[0][5];
        this.cube[0][5] = temp5;
    }

    scrambleCube() {
        let scramble: string[] = this.scramble.split(' ');
        for (let i = 0; i < scramble.length; i++) {
            switch (scramble[i]) {
                case 'R':
                    this.rNotation();
                    break;
                case 'R2':
                    this.rNotation();
                    this.rNotation();
                    break;
                case "R'":
                    this.rNotation();
                    this.rNotation();
                    this.rNotation();
                    break;
                case 'L':
                    this.lNotation();
                    break;
                case 'L2':
                    this.lNotation();
                    this.lNotation();
                    break;
                case "L'":
                    this.lNotation();
                    this.lNotation();
                    this.lNotation();
                    break;
                case 'U':
                    this.uNotation();
                    break;
                case 'U2':
                    this.uNotation();
                    this.uNotation();

                    break;
                case "U'":
                    this.uNotation();
                    this.uNotation();
                    this.uNotation();
                    break;
                case 'D':
                    this.dNotation();
                    break;
                case 'D2':
                    this.dNotation();
                    this.dNotation();
                    break;
                case "D'":
                    this.dNotation();
                    this.dNotation();
                    this.dNotation();
                    break;
                case 'F':
                    this.fNotation();
                    break;
                case 'F2':
                    this.fNotation();
                    this.fNotation();
                    break;
                case "F'":
                    this.fNotation();

                    this.fNotation();
                    this.fNotation();
                    break;
                case 'B':
                    this.bNotation();
                    break;
                case 'B2':
                    this.bNotation();
                    this.bNotation();
                    break;
                case "B'":
                    this.bNotation();
                    this.bNotation();
                    this.bNotation();
                    break;
            }
        }
    }

    printCube() {
        var cubeContainer = document.querySelector('.cube__container');

        if (cubeContainer) {
            cubeContainer.innerHTML = '';
            var canvas = document.createElement('canvas');
            canvas.width = 180;
            canvas.height = 135;
            canvas.id = 'cube__canvas';
            cubeContainer.appendChild(canvas);

            var ctx = canvas.getContext('2d');
            var columnSize = 15;
            var rowSize = 15;
            if (ctx) {
                for (var i = 0; i < this.cube.length; i++) {
                    for (var j = 0; j < this.cube[i].length; j++) {
                        var color = this.cube[i][j];
                        // Calculate the position of the current column on the canvas
                        var x = j * columnSize;
                        // Calculate the position of the current row on the canvas
                        var y = i * rowSize;
                        // Set the fill color based on the cube color
                        switch (color) {
                            case 'W':
                                ctx!.fillStyle = '#FFFFFF';
                                break;
                            case 'O':
                                ctx!.fillStyle = '#FFA500';
                                break;
                            case 'G':
                                ctx!.fillStyle = '#00FF00';
                                break;
                            case 'R':
                                ctx!.fillStyle = '#FF0000';
                                break;
                            case 'B':
                                ctx!.fillStyle = '#0000FF';
                                break;
                            case 'Y':
                                ctx!.fillStyle = '#FFFF00';
                                break;
                            default:
                                ctx!.fillStyle = 'rgba(0, 0, 0, 0)';
                                break;
                        }
                        // Draw the column on the canvas
                        ctx!.fillRect(x, y, columnSize, rowSize);
                    }
                }
            }
        }
    }

    countdownElement: any = document.querySelector('.countdown');
    countdownInterval: any;
    stopwatchInterval: any;
    isCountdownRunning: boolean = false;
    isStopwatchRunning: boolean = false;

    seconds: number = 0;
    milliseconds: number = 0;

    isDNF: boolean = false;

    inspectionTime: any = 15;

    isInspectionVisible: boolean = true;
    isStopwatchVisible: boolean = false;

    message: string = 'Click or tap to start inspection';

    startCountdown() {
        if (this.isCountdownRunning) {
            clearInterval(this.countdownInterval);
            this.startStopwatch();
            return;
        }

        this.isCountdownRunning = true;
        this.inspectionTime = 15;

        this.countdownInterval = setInterval(() => {
            var count = this.inspectionTime;
            count--;

            if (count === 0) {
                clearInterval(this.countdownInterval);
                this.isStopwatchRunning = false;
                this.inspectionTime = 'DNF';
                this.isCountdownRunning = false;
                this.isDNF = true;
                this.setSolve();
                this.isDNF = false;
                this.generateScramble();
                this.message = 'Click or tap to start inspection';
            } else {
                this.inspectionTime = count;
            }
        }, 1000);
    }

    startStopwatch() {
        if (this.isStopwatchRunning) {
            clearInterval(this.stopwatchInterval);
            this.isStopwatchRunning = false;
            this.inspectionTime = 15;
            this.isCountdownRunning = false;
            this.setSolve();
            this.generateScramble();
            this.message = 'Click or tap to start inspection';
            return;
        }

        this.seconds = 0;
        this.milliseconds = 0;

        this.stopwatchInterval = setInterval(() => {
            this.milliseconds++;
            if (this.milliseconds === 100) {
                this.milliseconds = 0;
                this.seconds++;
            }
        }, 10);

        this.isStopwatchRunning = true;

        this.message = 'Click or tap to stop the timer';
    }

    padZero(number: number) {
        return number.toString().padStart(2, '0');
    }

    formatMilliseconds(milliseconds: number): string {
        return milliseconds.toString().padStart(3, '0');
    }

    @HostListener('document:keyup', ['$event'])
    handleKeyUp(event: KeyboardEvent) {
        // If the spacebar is pressed
        if (event.key === ' ') {
            this.handleTimerClick();
        }
    }
    handleTimerClick() {
        if (this.isCountdownRunning) {
            clearInterval(this.countdownInterval);
            this.startStopwatch();
            this.isInspectionVisible = false;
            this.isStopwatchVisible = true;
        } else {
            this.startCountdown();
            this.isInspectionVisible = true;
            this.isStopwatchVisible = false;

            this.message = 'Click or tap to start the timer';
        }
    }

    setSolve() {
        var userId = Number(localStorage.getItem('userId'));

        if (userId) {
            var date = new Date();

            if (!this.isDNF) {
                var solve = {
                    category: "3x3x3 Rubik's Cube",
                    time: this.seconds + '.' + this.milliseconds,
                    scramble: this.scramble,
                    date: date.toISOString(),
                };
            } else {
                var solve = {
                    category: "3x3x3 Rubik's Cube",
                    time: 'DNF',
                    scramble: this.scramble,
                    date: date.toISOString(),
                };
            }

            this.dataService.setSolve(userId, solve);
        }
    }
}
