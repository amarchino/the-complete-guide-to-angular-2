import { Injectable, signal } from '@angular/core';
import { type InvestmentInput } from './investment-input.model';
import { InvestmentOutput } from './investment-output.model';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  //resultData = signal<InvestmentOutput[] | undefined>(undefined);
  resultData: InvestmentOutput[] | undefined = undefined;

  calculateInvestmentResults(data: InvestmentInput) {
      const { initialInvestment, annualInvestment, duration, expectedReturn } = data;
      const annualData = [];
      let investmentValue = initialInvestment;

      for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: initialInvestment + annualInvestment * year,
        });
      }
      // this.resultData.set(annualData);
      this.resultData = annualData;
    }
}
