import React from 'react';
import { Alarm } from 'material-design-icons'

import './global.css';

export default function App() {
  return (
    <div className="container">
      <h1>Buttons</h1>

        <button className="default">Default</button>

        <button className="outline">Default</button>

        <button className="text">Default</button>

        <button className="disable-shadow" onClick= {disableShadow} >Default</button>

        <button className="disabled" onClick= {disableButton}>Disable</button>

        <button className="icon">
          <span class="material-icons md-18">done</span>
          <p>Default</p>
        </button>

        <button className="icon">
          <p>Default</p>
          <span class="material-icons md-18">done</span>
        </button>

        <button className="size">Default</button>

        <button className="color">Default</button>
    </div>

    )

  function disableShadow() {
    let buttons = document.getElementsByTagName('button');
    let buttonsWithShadow = [];
    console.log(buttons);

    for (let button of buttons) {
      if (button.style.boxShadow != '')
        buttonsWithShadow.push(buttons);
    }

    console.log(buttonsWithShadow);
  }

  function disableButton() {
    let button = document.getElementsByClassName('disabled')

    if(button[0].classList.length === 1) {
      button[0].classList.add("disabled-text")
      button[0].textContent = "Disabled"
    } else {
      button[0].classList.remove("disabled-text")
      button[0].textContent = "Disable"
    }

  }
}