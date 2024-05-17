import { useState } from "react";
import "./App.css";
import HeaderBar from "./HeaderBar/HeaderBar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `calculation-tool`;
    navigate(path);
  };

  return (
    <>
      <div class="get-started-button">
        <button onClick={routeChange}>Get Started</button>
      </div>
    </>
  );
}
