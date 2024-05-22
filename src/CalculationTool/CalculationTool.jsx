import { useState } from "react";
import "./CalculationTool.css";

function YearsToPayOffCollegeWidget() {
  return(
    <>
      <h3 id="tool-page-widget-header">In how many years do you want to be done paying off college</h3>
    </>
  );
}

function PerMonthPaymentWidget() {
  return(
    <>
      <h3 id="tool-page-widget-header">Monthly Payment</h3>
    </>
  );
}

function LoansInterestRateWidget() {
  return(
    <>
      <h3 id="tool-page-widget-header"></h3>
    </>
  );
}

function LoansWidget() {
  return(
    <>
      <h3 id="tool-page-widget-header">Loans</h3>
    </>
  );
}

function ScholarshipWidget() {
  return(
    <>
      <h3 id="tool-page-widget-header">Scholarships (How much removed per semester)</h3>
    </>
  );
}

function SemesterCostWidget() {
  return (
    <>
      <h3 id="tool-page-widget-header">Semester Cost</h3>
    </>
  );
}


function TextAreaWidget() {
  return(
    <>
      <SemesterCostWidget></SemesterCostWidget>
      <ScholarshipWidget></ScholarshipWidget>
      <LoansWidget></LoansWidget>
      <LoansInterestRateWidget></LoansInterestRateWidget>
      <PerMonthPaymentWidget></PerMonthPaymentWidget>
      <YearsToPayOffCollegeWidget></YearsToPayOffCollegeWidget>
    </>
  );
}

export default function CalculationTool() {
  return (
    <>
      <h2 id="calculation-tool-page-second-header">Calculation Tool</h2>
      <TextAreaWidget></TextAreaWidget>
    </>
  );
}

/*

What is needed in order to calculate the rough estimate of the amount
of time it will take to pay off college

- Semester Cost, float
- Scholarships (how much off per semester)
- Loans, bool
- Loan Interest Rate, float
- How much do you want to pay per month
- In how many years do you want to be done paying off college
*/



// LOOK INTO FORMS ON REACT, MIGHT NEED TO DO A LARGE CHANGE IN CODE BEFORE CONTINUING