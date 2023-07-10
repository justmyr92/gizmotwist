/** @format */

import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  tutorial: string = 'OLL';
  algorithm: any = [
    {
      number: 1,
      name: 'OLL 1',
      image: 'assets/oll/1.png',
      scramble: "R U2 R2 F R F' U2 R' F R F'",
      type: 'OLL',
    },
    {
      number: 2,
      name: 'OLL 2',
      image: 'assets/oll/2.png',
      scramble: "r U r' U2 r U2 R' U2 R U' r'",
      type: 'OLL',
    },
    {
      number: 3,
      name: 'OLL 3',
      image: 'assets/oll/3.png',
      scramble: "r' R2 U R' U r U2 r' U M'",
      type: 'OLL',
    },
    {
      number: 4,
      name: 'OLL 4',
      image: 'assets/oll/4.png',
      scramble: "M U' r U2 r' U' R U' R' M'",
      type: 'OLL',
    },
    {
      number: 5,
      name: 'OLL 5',
      image: 'assets/oll/5.png',
      scramble: "l' U2 L U L' U l",
      type: 'OLL',
    },
    {
      number: 6,
      name: 'OLL 6',
      image: 'assets/oll/6.png',
      scramble: "r U2 R' U' R U' r'",
      type: 'OLL',
    },
    {
      number: 7,
      name: 'OLL 7',
      image: 'assets/oll/7.png',
      scramble: "r U R' U R U2 r'",
      type: 'OLL',
    },
    {
      number: 8,
      name: 'OLL 8',
      image: 'assets/oll/8.png',
      scramble: "l' U' L U' L' U2 l",
      type: 'OLL',
    },
    {
      number: 9,
      name: 'OLL 9',
      image: 'assets/oll/9.png',
      scramble: "R U R' U' R' F R2 U R' U' F'",
      type: 'OLL',
    },
    {
      number: 10,
      name: 'OLL 10',
      image: 'assets/oll/10.png',
      scramble: "R U R' U R' F R F' R U2 R'",
      type: 'OLL',
    },
    {
      number: 11,
      name: 'OLL 11',
      image: 'assets/oll/11.png',
      scramble: "r U R' U R' F R F' R U2 r'",
      type: 'OLL',
    },
    {
      number: 12,
      name: 'OLL 12',
      image: 'assets/oll/12.png',
      scramble: "M' R' U' R U' R' U2 R U' R r'",
      type: 'OLL',
    },
    {
      number: 13,
      name: 'OLL 13',
      image: 'assets/oll/13.png',
      scramble: "F U R U' R2 F' R U R U' R'",
      type: 'OLL',
    },
    {
      number: 14,
      name: 'OLL 14',
      image: 'assets/oll/14.png',
      scramble: "R' F R U R' F' R F U' F'",
      type: 'OLL',
    },
    {
      number: 15,
      name: 'OLL 15',
      image: 'assets/oll/15.png',
      scramble: "l' U' l L' U' L U l' U l",
      type: 'OLL',
    },
    {
      number: 16,
      name: 'OLL 16',
      image: 'assets/oll/16.png',
      scramble: "r U r' R U R' U' r U' r'",
      type: 'OLL',
    },
    {
      number: 17,
      name: 'OLL 17',
      image: 'assets/oll/17.png',
      scramble: "F R' F' R2 r' U R U' R' U' M'",
      type: 'OLL',
    },
    {
      number: 18,
      name: 'OLL 18',
      image: 'assets/oll/18.png',
      scramble: "r U R' U R U2 r2 U' R U' R' U2 r",
      type: 'OLL',
    },
    {
      number: 19,
      name: 'OLL 19',
      image: 'assets/oll/19.png',
      scramble: "r' R U R U R' U' M' R' F R F'",
      type: 'OLL',
    },
    {
      number: 20,
      name: 'OLL 20',
      image: 'assets/oll/20.png',
      scramble: "r U R' U' M2 U R U' R' U' M'",
      type: 'OLL',
    },
    {
      number: 21,
      name: 'OLL 21',
      image: 'assets/oll/21.png',
      scramble: "R U2 R' U' R U R' U' R U' R'",
      type: 'OLL',
    },
    {
      number: 22,
      name: 'OLL 22',
      image: 'assets/oll/22.png',
      scramble: "R U2 R2 U' R2 U' R2 U2 R",
      type: 'OLL',
    },
    {
      number: 23,
      name: 'OLL 23',
      image: 'assets/oll/23.png',
      scramble: "R2 D' R U2 R' D R U2 R",
      type: 'OLL',
    },
    {
      number: 24,
      name: 'OLL 24',
      image: 'assets/oll/24.png',
      scramble: "r U R' U' r' F R F'",
      type: 'OLL',
    },
    {
      number: 25,
      name: 'OLL 25',
      image: 'assets/oll/25.png',
      scramble: "F' r U R' U' r' F R",
      type: 'OLL',
    },
    {
      number: 26,
      name: 'OLL 26',
      image: 'assets/oll/26.png',
      scramble: "R U2 R' U' R U' R'",
      type: 'OLL',
    },
    {
      number: 27,
      name: 'OLL 27',
      image: 'assets/oll/27.png',
      scramble: "R U R' U R U2 R'",
      type: 'OLL',
    },
    {
      number: 28,
      name: 'OLL 28',
      image: 'assets/oll/28.png',
      scramble: "r U R' U' r' R U R U' R'",
      type: 'OLL',
    },
    {
      number: 29,
      name: 'OLL 29',
      image: 'assets/oll/29.png',
      scramble: "R U R' U' R U' R' F' U' F R U R'",
      type: 'OLL',
    },
    {
      number: 30,
      name: 'OLL 30',
      image: 'assets/oll/30.png',
      scramble: "F R' F R2 U' R' U' R U R' F2",
      type: 'OLL',
    },
    {
      number: 31,
      name: 'OLL 31',
      image: 'assets/oll/31.png',
      scramble: "R' U' F U R U' R' F' R",
      type: 'OLL',
    },
    {
      number: 32,
      name: 'OLL 32',
      image: 'assets/oll/32.png',
      scramble: "L U F' U' L' U L F L'",
      type: 'OLL',
    },
    {
      number: 33,
      name: 'OLL 33',
      image: 'assets/oll/33.png',
      scramble: "R U R' U' R' F R F'",
      type: 'OLL',
    },
    {
      number: 34,
      name: 'OLL 34',
      image: 'assets/oll/34.png',
      scramble: "R U R2 U' R' F R U R U' F'",
      type: 'OLL',
    },
    {
      number: 35,
      name: 'OLL 35',
      image: 'assets/oll/35.png',
      scramble: "R U2 R2 F R F' R U2 R'",
      type: 'OLL',
    },
    {
      number: 36,
      name: 'OLL 36',
      image: 'assets/oll/36.png',
      scramble: "L' U' L U' L' U L U L F' L' F",
      type: 'OLL',
    },
    {
      number: 37,
      name: 'OLL 37',
      image: 'assets/oll/37.png',
      scramble: "F R' F' R U R U' R'",
      type: 'OLL',
    },
    {
      number: 38,
      name: 'OLL 38',
      image: 'assets/oll/38.png',
      scramble: "R U R' U R U' R' U' R' F R F'",
      type: 'OLL',
    },
    {
      number: 39,
      name: 'OLL 39',
      image: 'assets/oll/39.png',
      scramble: "L F' L' U' L U F U' L'",
      type: 'OLL',
    },

    {
      number: 40,
      name: 'OLL 40',
      image: 'assets/oll/40.png',
      scramble: "R' F R U R' U' F' U R",
      type: 'OLL',
    },
    {
      number: 41,
      name: 'OLL 41',
      image: 'assets/oll/41.png',
      scramble: "R U R' U R U2 R' F R U R' U' F'",
      type: 'OLL',
    },
    {
      number: 42,
      name: 'OLL 42',
      image: 'assets/oll/42.png',
      scramble: "R' U' R U' R' U2 R F R U R' U' F'",
      type: 'OLL',
    },
    {
      number: 43,
      name: 'OLL 43',
      image: 'assets/oll/43.png',
      scramble: "F' U' L' U L F",
      type: 'OLL',
    },
    {
      number: 44,
      name: 'OLL 44',
      image: 'assets/oll/44.png',
      scramble: "F U R U' R' F'",
      type: 'OLL',
    },
    {
      number: 45,
      name: 'OLL 45',
      image: 'assets/oll/45.png',
      scramble: "F R U R' U' F'",
      type: 'OLL',
    },
    {
      number: 46,
      name: 'OLL 46',
      image: 'assets/oll/46.png',
      scramble: "R' U' R' F R F' U R",
      type: 'OLL',
    },
    {
      number: 47,
      name: 'OLL 47',
      image: 'assets/oll/47.png',
      scramble: "R' U' R' F R F' R' F R F' U R",
      type: 'OLL',
    },
    {
      number: 48,
      name: 'OLL 48',
      image: 'assets/oll/48.png',
      scramble: "F R U R' U' R U R' U' F'",
      type: 'OLL',
    },
    {
      number: 49,
      name: 'OLL 49',
      image: 'assets/oll/49.png',
      scramble: "r U' r2 U r2 U r2 U' r",
      type: 'OLL',
    },
    {
      number: 50,
      name: 'OLL 50',
      image: 'assets/oll/50.png',
      scramble: "r' U r2 U' r2 U' r2 U r'",
      type: 'OLL',
    },
    {
      number: 51,
      name: 'OLL 51',
      image: 'assets/oll/51.png',
      scramble: "F U R U' R' U R U' R' F'",
      type: 'OLL',
    },
    {
      number: 52,
      name: 'OLL 52',
      image: 'assets/oll/52.png',
      scramble: "R U R' U R U' B U' B' R'",
      type: 'OLL',
    },
    {
      number: 53,
      name: 'OLL 53',
      image: 'assets/oll/53.png',
      scramble: "l' U2 L U L' U' L U L' U l",
      type: 'OLL',
    },
    {
      number: 54,
      name: 'OLL 54',
      image: 'assets/oll/54.png',
      scramble: "r U2 R' U' R U R' U' R U' r'",
      type: 'OLL',
    },
    {
      number: 55,
      name: 'OLL 55',
      image: 'assets/oll/55.png',
      scramble: "R' F R U R U' R2 F' R2 U' R' U R U R'",
      type: 'OLL',
    },
    {
      number: 56,
      name: 'OLL 56',
      image: 'assets/oll/56.png',
      scramble: "r' U' r U' R' U R U' R' U R r' U r",
      type: 'OLL',
    },
    {
      number: 57,
      name: 'OLL 57',
      image: 'assets/oll/57.png',
      scramble: "R U R' U' M' U R U' r'",
      type: 'OLL',
    },
    {
      number: 58,
      name: 'Aa Perm',
      image: 'assets/pll/58.png',
      scramble: "x L2 D2 L' U' L D2 L' U L'",
      type: 'PLL',
    },
    {
      number: 59,
      name: 'Ab Perm',
      image: 'assets/pll/59.png',
      scramble: "x' L2 D2 L U L' D2 L U' L",
      type: 'PLL',
    },
    {
      number: 60,
      name: 'F Perm',
      image: 'assets/pll/60.png',
      scramble: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
      type: 'PLL',
    },
    {
      number: 60,
      name: 'F Perm',
      image: 'assets/pll/60.png',
      scramble: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
      type: 'PLL',
    },
    {
      number: 61,
      name: 'Ga Perm',
      image: 'assets/pll/61.png',
      scramble: "R2 U R' U R' U' R U' R2 U' D R' U R D'",
      type: 'PLL',
    },
    {
      number: 62,
      name: 'Gb Perm',
      image: 'assets/pll/62.png',
      scramble: "R' U' R U D' R2 U R' U R U' R U' R2 D",
      type: 'PLL',
    },
    {
      number: 63,
      name: 'Gc Perm',
      image: 'assets/pll/63.png',
      scramble: "R2 U' R U' R U R' U R2 U D' R U' R' D",
      type: 'PLL',
    },
    {
      number: 64,
      name: 'Gd Perm',
      image: 'assets/pll/64.png',
      scramble: "R U R' U' D R2 U' R U' R' U R' U R2 D'",
      type: 'PLL',
    },
    {
      number: 65,
      name: 'Ja Perm',
      image: 'assets/pll/65.png',
      scramble: "x R2 F R F' R U2 r' U r U2",
      type: 'PLL',
    },
    {
      number: 66,
      name: 'Jb Perm',
      image: 'assets/pll/66.png',
      scramble: "R U R' F' R U R' U' R' F R2 U' R'",
      type: 'PLL',
    },
    {
      number: 67,
      name: 'Ra Perm',
      image: 'assets/pll/67.png',
      scramble: "R U' R' U' R U R D R' U' R D' R' U2 R'",
      type: 'PLL',
    },
    {
      number: 68,
      name: 'Rb Perm',
      image: 'assets/pll/68.png',
      scramble: "R2 F R U R U' R' F' R U2 R' U2 R",
      type: 'PLL',
    },
    {
      number: 69,
      name: 'T Perm',
      image: 'assets/pll/69.png',
      scramble: "R U R' U' R' F R2 U' R' U' R U R' F'",
      type: 'PLL',
    },
    {
      number: 70,
      name: 'E Perm',
      image: 'assets/pll/70.png',
      scramble: "x' L' U L D' L' U' L D L' U' L D' L' U L D",
      type: 'PLL',
    },
    {
      number: 71,
      name: 'Na Perm',
      image: 'assets/pll/71.png',
      scramble: "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
      type: 'PLL',
    },
    {
      number: 72,
      name: 'Nb Perm',
      image: 'assets/pll/72.png',
      scramble: "R' U R U' R' F' U' F R U R' F R' F' R U' R",
      type: 'PLL',
    },
    {
      number: 73,
      name: 'V Perm',
      image: 'assets/pll/73.png',
      scramble: "R' U R' U' y R' F' R2 U' R' U R' F R F",
      type: 'PLL',
    },
    {
      number: 74,
      name: 'Y Perm',
      image: 'assets/pll/74.png',
      scramble: "F R U' R' U' R U R' F' R U R' U' R' F R F'",
      type: 'PLL',
    },
    {
      number: 75,
      name: 'H Perm',
      image: 'assets/pll/75.png',
      scramble: 'M2 U M2 U2 M2 U M2',
      type: 'PLL',
    },
    {
      number: 76,
      name: 'Ua Perm',
      image: 'assets/pll/76.png',
      scramble: "M2 U M U2 M' U M2",
      type: 'PLL',
    },
    {
      number: 77,
      name: 'Ub Perm',
      image: 'assets/pll/77.png',
      scramble: "M2 U' M U2 M' U' M2",
      type: 'PLL',
    },
    {
      number: 78,
      name: 'Z Perm',
      image: 'assets/pll/78.png',
      scramble: "M' U M2 U M2 U M' U2 M2",
      type: 'PLL',
    },
  ];

  constructor() {
    this.getRows();
  }
  ngOnInit() {}

  setTutorial() {
    if (this.tutorial === 'OLL') {
      this.tutorial = 'PLL';

      this.getRows();
    } else {
      this.tutorial = 'OLL';

      this.getRows();
    }
    console.log(this.tutorial);
  }

  filteredTutorial: any = [];

  getRows() {
    this.filteredTutorial = [];
    for (let i = 0; i < this.algorithm.length; i++) {
      if (this.algorithm[i].type === this.tutorial) {
        this.filteredTutorial.push(this.algorithm[i]);
      }
    }
  }

  item: any = {};
  isModalOpen = false;

  setOpen(isOpen: boolean, item: any) {
    if (item == 'null') {
      this.item = {};
    } else {
      this.item = item;
    }

    this.isModalOpen = isOpen;
  }
}
