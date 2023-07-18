import "./InvestmentsResult.css"

export default function InvestmentsResult({ investments }) {
  let content = (
    <tr>
      <td>YEAR NUMBER</td>
      <td>TOTAL SAVINGS END OF YEAR</td>
      <td>INTEREST GAINED IN YEAR</td>
      <td>TOTAL INTEREST GAINED</td>
      <td>TOTAL INVESTED CAPITAL</td>
    </tr>
  );

  if (investments && investments.length > 0) {
    content = investments.map( investment => {
      <tr>
        <td>{investment.year}</td>
        <td>{investment.yearTotalSavings}</td>
        <td>{investment.interestGainedInYear}</td>
        <td>{investment.totalInterestGained}</td>
        <td>{investment.totalInvested}</td>
      </tr>;
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
    </table>
  );
}
