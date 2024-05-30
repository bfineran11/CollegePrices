import { useState } from "react";
import "./CalculationTool.css";


var netCost = 0;


function TextAreaWidget() {

  function calculate(formData) {
      let cost = formData.get("semester-cost");
      let numSemesters = formData.get("number-of-semesters");
      let scholarships = formData.get("scholarships");

      netCost = (cost * numSemesters) - (scholarships*numSemesters);
      <Result></Result>
  }

  return(
    <>
      <form action={calculate}>

        <label>
          Semester Cost:
          <input type="number" name="semester-cost" onChange={calculate}/>
        </label>

        <br></br>

        <label>
          Number of Semesters:
          <input type="number" name="number-of-semesters" onChange={calculate}/>
        </label>

        <br></br>

        <label>
          Scholarships / Tutiotion Support:
          <input type="number" name="scholarships" onChange={calculate}/>
        </label>

        <br />
    
      </form>


    </>
  );
}

function Result() {
  return(
    <>
      <div>
        <h2>Net Cost: </h2>
      </div>
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