import React from "react";

function ReactionTimeResults(props){
  return(
    <div className="rt-gameplay-screen">
      <h1>Results</h1>
      <h2>{props.results} ms</h2>
      <p>Click anywhere to try again</p>
    </div>
  )
}

export default ReactionTimeResults;