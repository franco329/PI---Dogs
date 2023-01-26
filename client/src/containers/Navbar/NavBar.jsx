import React from "react";
import { Buttons } from "../../components/Buttons/Buttons";
import "./NavBar.css";

export class NavBar extends React.Component {
  render() {
    return (
      <>
        <header>
          <Buttons />
        </header>
      </>
    );
  }
}
