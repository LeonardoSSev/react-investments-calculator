import { useState } from "react";
import "./InvestmentsForm.css";

export default function InvestmentsForm(props) {
  const [currentSavings, setCurrentSavings] = useState(props.currentSavings | 0);
  const [yearlyContribution, setYearlyContribution] = useState(props.yearlyContribution | 0);
  const [expectedReturn, setExpectedReturn] = useState(props.expectedReturn | 0);
  const [duration, setDuration] = useState(props.duration | 0);

  const currentSavingsChangeHandler = (e) => setCurrentSavings(e.target.value);
  const yearlyContributionChangeHandler = (e) => setYearlyContribution(e.target.value);
  const expectedReturnChangeHandler = (e) => setExpectedReturn(e.target.value);
  const durationChangeHandler = (e) => setDuration(e.target.value);


  const resetHandler = (e) => {
    e.preventDefault();
    props.onReset();
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const input = {
      currentSavings: +currentSavings,
      yearlyContribution: +yearlyContribution,
      expectedReturn: +expectedReturn,
      duration: +duration
    };

    props.onCalculate(input);
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={currentSavings} onChange={currentSavingsChangeHandler} />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={yearlyContribution} onChange={yearlyContributionChangeHandler} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={expectedReturn} onChange={expectedReturnChangeHandler} />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={duration} onChange={durationChangeHandler} />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
