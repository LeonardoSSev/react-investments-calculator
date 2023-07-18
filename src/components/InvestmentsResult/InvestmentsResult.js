import "./InvestmentsResult.css";

export default function InvestmentsResult({ initialInvestment, incomes }) {
  console.log(initialInvestment, incomes)
  let content = (
    <tr>
      <td colSpan="5">No investment calculated</td>
    </tr>
  );

  if (incomes && incomes.length > 0) {
    content = incomes.map(( {year, yearlyInterest, savingsEndOfYear, yearlyContribution, totalInvested } ) => {
      return (
        <tr key={year}>
          <td>{year}</td>
          <td>{savingsEndOfYear}</td>
          <td>{yearlyInterest}</td>
          <td>{savingsEndOfYear - initialInvestment - (yearlyContribution * year)}</td>
          <td>{initialInvestment + (yearlyContribution * year)}</td>
        </tr>
      );
      
    });
  }

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
      <tfoot>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
      </tfoot>
    </table>
  );
}
