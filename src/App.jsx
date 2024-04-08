import React from "react";
import NavBar from "./components/header/NavBar";
import Cards from "./components/Body/Cards";
import './App.css'

export default function App() {
  return (<>
  <div className="Main-Component">
  <NavBar/>
  <Cards/>
  </div>
  </>);
}
