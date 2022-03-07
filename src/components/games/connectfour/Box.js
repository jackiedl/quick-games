import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';

function Box(props){
  return(
    <div className="cf-square">
      {props.value === "R" ? <FontAwesomeIcon className="red-circle" icon={faCircle} size="2xl" /> :
      props.value === "B" ? <FontAwesomeIcon className="black-circle" icon={faCircle} size="2xl"/> : ""}
    </div>
  )
}

export default Box;