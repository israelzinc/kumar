import React, { useState } from 'react';

import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from "react-bootstrap/ButtonGroup"
import NoCamera from "./no-camera";
import Camera from "./camera"
import PoseComponent from "./pose"

function Main() {  

  const [camOn, setCam] = useState<boolean>(false);

  const setRadioValue = (e: boolean) => {
    setCam(e);
  }

  return <div>
    {/* {camOn ? <Camera/> : <NoCamera/>} */}
    {camOn ? <PoseComponent /> : <NoCamera />}
    <ButtonGroup toggle>
      <ToggleButton
        key={"0"}
        type="radio"
        variant="secondary"
        name="radio"
        value={"ON"}
        checked={camOn}
        onClick={(e) => setRadioValue(true)}
      >オン
        </ToggleButton>
      <ToggleButton
        key={"1"}
        type="radio"
        variant="secondary"
        name="radio"
        value={"OFF"}
        checked={!camOn}
        onClick={(e) => setRadioValue(false)}
      >オフ
        </ToggleButton>
    </ButtonGroup>
    
  </div>
}

export default Main;
