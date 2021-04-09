import React, { useState } from 'react';

import './global.css';

export default function App() {
  const [buttonState, setButtonState] = useState({
    isLeftButton: true
  });



  return (
    <div className="container">
      <h1>Buttons</h1>

        <p className="title"> {"<Button />"} </p>
        <button className="default">Default</button>

        <p className="title title-outline"> {"<Button variant=”outline"} </p>
        <button className="outline">Default</button>

        <p className="title title-text"> {"<Button variant=”text” />"} </p>
        <button className="text">Default</button>
        
        <p className="title title-disable-shadow"> {"<Button disableShadow />"} </p>
        <button className="disable-shadow" onClick= {disableShadow} >Default</button>

        <p className="title title-disabled"> {"<Button disabled />"} </p>
        <button className="disabled" onClick= {disableButton}>Disable</button>

        <p className="title title-icon"> {"<Button startIcon=”done” />"} </p>
        
        {
          buttonState.isLeftButton ?
            <button onClick={() => toogleIconButton()} className="icon">
              <span className="material-icons md-18">done</span>
              <p>Default</p>  
            </button>
          :
            <button onClick={() => toogleIconButton()} className="icon">
              <p>Default</p>
              <span className="material-icons md-18">done</span>
            </button>
        }

        <p className="title title-size"> {"<Button size=”sm” />"} </p>
        <button className="size">Default</button>

        <p className="title title-size-md"> {"<Button size=”md” />"} </p>
        <button className="size size-md">Default</button>

        <p className="title title-size-lg"> {"<Button size=”lg” />"} </p>
        <button className="size size-lg">Default</button>

        <p className="title title-color"> {"<Button color=”default” />"} </p>
        <button className="color">Default</button>

        <p className="title title-color-primary"> {"<Button color=”primary” />"} </p>
        <button className="color color-primary">Default</button>

        <p className="title title-color-secondary"> {"<Button color=”secondary” />"} </p>
        <button className="color color-secondary">Secondary</button>

        <p className="title title-color-danger"> {"<Button color=”danger” />"} </p>
        <button className="color color-danger">Danger</button>

        <p className="icons">Icons: https://material.io/resources/icons/?style=round</p>
        
        <p className="created">created by João Victor Ribeiro - devChallenges.io</p>
    </div>

    )

  function disableShadow() {
    let buttons = document.getElementsByTagName('button');
    let buttonsWithShadow = [];
    console.log(buttons);

    for (let button of buttons) {
      if (button.style.boxShadow !== '')
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

  function toogleIconButton() {
    let _isLeftButton;
    if(buttonState.isLeftButton) {
      _isLeftButton = false
    } else {
      _isLeftButton = true
    }

    setButtonState({
      isLeftButton: _isLeftButton
    })
  }
}