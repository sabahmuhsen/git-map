import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

    result: any;
    value: any;
    decimal: boolean;
    answer: number;
    total: Array<number>;
    clear: boolean;
    previous_operator: any;

    constructor() {
        this.result = '';
        this.decimal = false;
        this.answer = 0;
        this.total = [];
        this.clear = false;
        this.previous_operator = false;
        console.log(5 % 2);
    }

    addToCalculation(value) {

        if (this.clear === true) {
            this.result = '';
            this.clear = false;
        }

        if (value === '.') {

            if (this.decimal === true) {
                return false;
            }

            this.decimal = true;

        }

        this.result += value;

    }

    calculate(operator) {

        this.total.push(this.result);
        this.result = '';

        if (this.total.length === 2) {
            const a = Number(this.total[0]);
            const b = Number(this.total[1]);
            let total;
            if (this.previous_operator === '+') {
                 total = a + b;
            } else if (this.previous_operator === '-') {
                 total = a - b;
            } else if (this.previous_operator === '*') {
                 total = a * b;
             } else if (this.previous_operator === '^') {
                 total = Math.pow(a, b);
            } else if (this.previous_operator === 'cos') {
                 total = Math.cos(a);
            } else if (this.previous_operator === 'tan') {
                 total = Math.tan(a);
            } else if (this.previous_operator === 'sin') {
                 total = Math.sin(a);
            } else if (this.previous_operator === 'sqrt') {
                 total = Math.sqrt(a);

            } else {
                 total = a / b;
            }
            const answer = total;

            this.total = [];
            this.total.push(answer);
            this.result = total;
            this.clear = true;
        } else {
            this.clear = false;
        }

        this.decimal = false;
        this.previous_operator = operator;

    }

    getTotal() {
        const a = Number(this.total[0]);
        const b = Number(this.result);
        let total;
        if (this.previous_operator === '+') {
             total = a + b;
        } else if (this.previous_operator === '-') {
             total = a - b;
        } else if (this.previous_operator === '*') {
             total = a * b;
        } else if (this.previous_operator === '^') {
                 total = Math.pow(a, b);
            } else if (this.previous_operator === 'cos') {
                 total = Math.cos(a);
            } else if (this.previous_operator === 'tan') {
                 total = Math.tan(a);
            } else if (this.previous_operator === 'sin') {
                 total = Math.sin(a);
            } else if (this.previous_operator === 'sqrt') {
                 total = Math.sqrt(a);
     
        } else {
             total = a / b;
        }

        if (isNaN(total)) {
            return false;
        }

        this.result = total;
        this.total = [];
        this.clear = true;
    }

    reset() {
      this.result = '';
       this.total = [];
    }
    resetCE() {
      this.result = '';
    }
    backspace() {
      const index = this.result.length - 1;
      console.log(typeof this.result);
      this.result = this.result.slice(0, index);
    }

}
