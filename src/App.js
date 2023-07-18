import InvestmentsCalculator from "./components/InvestmentsCalculator/InvestmentsCalculator";
import InvestmentsResult from "./components/InvestmentsResult/InvestmentsResult";
import Header from "./components/UI/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <InvestmentsCalculator />
      <InvestmentsResult />
    </div>
  );
}

export default App;
