import React, { useState } from "react";

export default function Card() {
  const [changeColor, setchangeColor] = useState(true)

  const clickEvent = () => {
    setchangeColor(current => !current)
  }
  return (
    <>
    <h1>On click of card </h1>
    <div className="row">
      <div className="card1" onClick={clickEvent}>
      <div className={changeColor ? 'card-one' : 'card-one-inactive'}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, cum?</p>
        </div>
      </div>
      <div className="card2" onClick={clickEvent}>
      <div className={changeColor ? 'card-two-inactive' : 'card-two'}>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, laudantium.</p>
      </div>
      </div>
    </div>
    </>
  )
}

