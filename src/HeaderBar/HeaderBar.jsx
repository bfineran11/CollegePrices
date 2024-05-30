import { useState } from "react";
import "./HeaderBar.css";
import { useNavigate } from "react-router-dom";

export default function HeaderBar() {

  let navigate = useNavigate();
  const calculationToolPageChange = () => {
    let path = `calculation-tool`;
    navigate(path);
  };

  const resourcesPageChange = () => {
    let path = `resources`;
    navigate(path);
  };

  return (
    <>
      <h1>College Pricing</h1>


      <div>
        <ul>
          <button onClick={calculationToolPageChange}>Get Started</button>
          <button onClick={resourcesPageChange}>Resources</button>
        </ul>
      </div>


      <hr id="header-line"></hr>
    </>
  );
}
