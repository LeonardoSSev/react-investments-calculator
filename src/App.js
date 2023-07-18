import { useState } from "react";
import InvestmentsCalculator from "./components/InvestmentsCalculator/InvestmentsCalculator";
import InvestmentsResult from "./components/InvestmentsResult/InvestmentsResult";
import Header from "./components/UI/Header/Header";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [initialInvestment, setInitialInvestment] = useState(0);

  const calculateInvestmentHandler = (result) => {
    setIncomes(result.yearlyData);
    setInitialInvestment(result.initialInvestment);
  }

  console.log("app -> incomes", incomes);
  
  return (
    <div>
      <Header />
      <InvestmentsCalculator onCalculateInvestment={calculateInvestmentHandler} />
      <InvestmentsResult incomes={incomes} initialInvestment={initialInvestment} />
    </div>
  );
}

export default App;
