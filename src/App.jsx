import { useState } from "react";
import "./App.css";

function HeaderBar() {
  return (
    <>
      <h1 id="page-header">College Pricing Tool</h1>
    </>
  );
}

function PageContent() {
  return (
    <>
      <button id="get-started-button" link="/tool">
        Get Started
      </button>
    </>
  );
}

export default function App() {
  return (
    <>
      <HeaderBar></HeaderBar>
      <PageContent></PageContent>
    </>
  );
}
