import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import React, { useState } from 'react'
import { TIMER, RESET, LINE } from './redux/circleReducer'

function App() {
  const dispatch = useDispatch()
  const [intervTimer, setIntervTimer] = useState()
  const [intervLine, setIntervLine] = useState()

  const minute = useSelector(state => state.minute)
  const milsecond = useSelector(state => state.milsecond)
  const second = useSelector(state => state.second)
  const line = useSelector(state => state.line)

  const timer = () => {
    dispatch({
      type: TIMER,
    })
  }

  const rotate = () => {
    dispatch({
      type: LINE,
    })
  }

  const start = () => {
    setIntervLine(setInterval(rotate, 10))
    setIntervTimer(setInterval(timer, 10))
  }

  const stop = () => {
    clearInterval(intervLine)
    clearInterval(intervTimer)
  }

  const reset = () => {
    clearInterval(intervLine)
    clearInterval(intervTimer)
    dispatch({ type: RESET })
  }

  return (
    <div className="App">

      <div className="dial__circle">
        <img className="dial__line" src="/img/Line.png" alt=""
          style={{ transform: `rotate(${line}deg)` }}></img>
      </div>

      <ul className="time">
        <li className="min">{(minute >= 10) ? minute : '0' + minute}&nbsp;:&nbsp;</li>
        <li className="sec">{(second >= 10) ? second : '0' + second}&nbsp;:&nbsp;</li>
        <li className="milsec">{(milsecond >= 10) ? milsecond : '0' + milsecond}</li>
      </ul>

      <ul>
        <li>
          <button type="button" onClick={() => start()}>Start</button></li>
        <li>
          <button type="button" onClick={() => stop()}>Stop</button></li>
        <li>
          <button type="button" onClick={() => reset()}>Reset</button></li>
      </ul>

    </div>
  );
}

export default App;
