import React from "react";

function ReactionTimePlaying(props){
  return(
    <div className="rt-gameplay-screen">
      {props.startTime === 0 ? <h1>Loading</h1> : <h1>Press Now!</h1>}
    </div>
  )
}

export default ReactionTimePlaying;