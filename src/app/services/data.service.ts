/** @format */
import {Injectable, EventEmitter} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    public userData: any = [
        {
            userId: 10001,
            emailAddress: 'justmyrgutierrez1@gmail.com',
            password: '123456',
            participated: true,
            solve: [
                {
                    category: "3x3x3 Rubik's Cube",
                    time: '10.00',
                    scramble: "R U R' U'",
                    date: '2021-01-01',
                },
                {
                    category: "3x3x3 Rubik's Cube",
                    time: '15.00',
                    scramble: "R U R' U'",
                    date: '2021-01-02',
                },
                {
                    category: "3x3x3 Rubik's Cube",
                    time: '20.00',
                    scramble: "R U R' U'",
                    date: '2021-01-03',
                },
            ],
        },
        {
            userId: 10002,
            emailAddress: 'raizhellannquijano@gmail.com',
            password: '123456',
            participated: true,
            solve: [
                {
                    category: "3x3x3 Rubik's Cube",
                    time: '10.00',
                    scramble: "R U R' U'",
                    date: '2021-01-01',
                },
            ],
        },
    ];

    solvesChange: EventEmitter<any[]> = new EventEmitter<any[]>();

    constructor() {}

    checkEmail(email: string) {
        for (let i = 0; i < this.userData.length; i++) {
            if (this.userData[i].emailAddress == email) {
                return true;
            }
        }
        return false;
    }

    addUser(email: string, password: string, participated: boolean) {
        let userId = Math.floor(Math.random() * 90000) + 10000;
        while (this.checkUserId(userId)) {
            userId = Math.floor(Math.random() * 90000) + 10000;
        }

        let newUser = {
            userId: userId,
            emailAddress: email,
            password: password,
            participated: participated,
            solve: [],
        };

        this.userData.push(newUser);
    }

    checkUserId(userId: number) {
        for (let i = 0; i < this.userData.length; i++) {
            if (this.userData[i].userId == userId) {
                return true;
            }
        }
        return false;
    }

    login(email: string, password: string) {
        for (let i = 0; i < this.userData.length; i++) {
            if (
                this.userData[i].emailAddress == email &&
                this.userData[i].password == password
            ) {
                localStorage.setItem('userId', this.userData[i].userId);
                return true;
            }
        }
        return false;
    }

    setSolve(userId: number, solve: any) {
        for (let i = 0; i < this.userData.length; i++) {
            if (this.userData[i].userId == userId) {
                this.userData[i].solve.push(solve);
                this.solvesChange.emit(this.userData[i].solve);
            }
        }
    }

    getSolve(userId: number) {
        for (let i = 0; i < this.userData.length; i++) {
            if (this.userData[i].userId == userId) {
                return this.userData[i].solve;
            }
        }
    }

    getSolveByCategory(userId: number, category: string) {
        let solves = [];
        for (let i = 0; i < this.userData.length; i++) {
            if (this.userData[i].userId == userId) {
                for (let j = 0; j < this.userData[i].solve.length; j++) {
                    if (this.userData[i].solve[j].category == category) {
                        solves.push(this.userData[i].solve[j]);
                    }
                }
            }
        }
        return solves;
    }

    logoutUser() {
        localStorage.clear();
    }
}
