import React, { useEffect, useState } from "react";

function ReactionTimeGame(){
  // false blue screen means it was clicked to early
  // true blue screen shows results 
  const [isPlaying, setIsPlaying] = useState(true);
  const [results, setResults] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    var game = document.getElementById("rt-game").classList;
    var timeout =  Math.random() * (10000 - 1500) + 1500; 
    if (!game.contains("blue") && startTime === 0){
      const timer = setTimeout(() => {
        game.remove("red");
        game.add("green");
        console.log(Date.now() + " start");
        setStartTime(Date.now())
      }, timeout);
      return () => clearTimeout(timer);
    }
    return;
  }, [startTime])

  const handleClick = () => {
    var game = document.getElementById("rt-game").classList;
    // clicked when screen is red. Will popup blue screen error msg 
    if (game.contains("red")){
      game.add("blue");
      game.remove("red");
      setIsPlaying(false);
    }
    // clicked when screen is showing error msg or results
    // will reset game on click
    else if (game.contains("blue")){
      game.add("red");
      game.remove("blue");
      setIsPlaying(true);
      reset();
    }
    // clicked when screen is showing green
    // will blue results screen
    else if (game.contains("green")){
      game.add("blue");
      game.remove("green");
      console.log(Date.now() + " end");
      setEndTime(Date.now());
      setResults(true);
      setIsPlaying(false);
    }
  }

  function reset(){
    setStartTime(0);
    setEndTime(0);
    setIsPlaying(true);
    setResults(false);
  }

  return(
    <div id="rt-game" className="gameplay rt red" onClick={handleClick}>
      {isPlaying ? <h1> Playing </h1> : results ? <h1> {(endTime - startTime)} </h1> : <h1> error</h1>}
    </div>
  )
}

export default ReactionTimeGame;