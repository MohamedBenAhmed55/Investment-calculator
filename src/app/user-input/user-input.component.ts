import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type  {InvetmentInput } from '../invetment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvetmentInput>();
  calculate = output<InvetmentInput>();

  // enteredInitialInvestment: string = '0';
  // enteredAnnualInvestment: string = '0';
  // enteredExpectedReturn: string = '5';
  // enteredDuration: string = '10';

  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');

  onSubmit() {
    this.calculate.emit({
    initialInvestment: +this.enteredInitialInvestment(),
    duration: +this.enteredDuration(),
    expectedReturn: +this.enteredExpectedReturn(),
    annualInvestment: +this.enteredAnnualInvestment()
  })

    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
