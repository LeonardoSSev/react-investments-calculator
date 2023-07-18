import { useState } from "react";
import InvestmentsForm from "./InvestmentsForm/InvestmentsForm";

export default function InvestmentsCalculator(props) {
  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (input) => {
    const expectedReturnCalculated = input.expectedReturn / 100;
    let currentSavingsCalculated = input.currentSavings;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < input.duration; i++) {
      const yearlyInterest = currentSavingsCalculated * expectedReturnCalculated;
      currentSavingsCalculated += yearlyInterest + input.yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavingsCalculated,
        yearlyContribution: input.yearlyContribution,
      });
    }

    const investment = {
      yearlyData, 
      initialInvestment: input.currentSavings
    };

    props.onCalculateInvestment(investment);
  };

  const resetHandler = () => {
    setYearlyData([]);
    props.onCalculateInvestment([]);
  };

  return (
    <InvestmentsForm
      onReset={resetHandler}
      onCalculate={calculateHandler}
    />
  );
}
