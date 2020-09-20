import React, { useState } from "react";
// import * as posenet from '@tensorflow-models/posenet';

import * as faceapi from "face-api.js"
import Webcam from 'react-webcam';
import {loadModels, getFullFaceDescription, createMatcher } from "../api/face";
// import * as canvas from 'canvas';

const JSON_PROFILE = require("../descriptors/bnk48.json");
const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

function PoseComponent() {

  const webcam = React.createRef<Webcam>();  
  const [fullDesc, setFullDesc] = useState<any>(null);
  const [detections, setDetections] = useState<any>(null);
  const [descriptors, setDescriptors] = useState<any>(null);
  const [faceMatcher, setFaceMatcher] = useState<any>(null);
  const [match, setMatch] = useState<any>(null);
  const [facingMode, setFacingMode] = useState<any>(null);

  const mount = async() => {
    await loadModels();
    const faceMatcher = await createMatcher(JSON_PROFILE);
    setFaceMatcher(faceMatcher);

  }

  const setInputDevice = () => {
    navigator.mediaDevices.enumerateDevices().then( async devices => {
      let inputDevice = await devices.filter(
        device => device.kind === 'videoinput'
      );
      if (inputDevice.length < 2) {
        await setFacingMode('user')
      } else {
        setFacingMode({exact: 'environment'})
      }
      startCapture();
    });
  }

  const startCapture = () => {
    setInterval(() => {
      capture()
    },1500)
  }

  const capture = async () => {
    // if (webcam.current) {
    //   await getFullFaceDescription(
    //     webcam.current.getScreenshot(),
    //     inputSize
    //   ).then( fullDesc => {
    //     if (!!fullDesc) {
    //       setDetections(fullDesc.map(fd => fd.detection));
    //       // setDescriptors(fullDesc.map(fd => fd.descriptor));
    //     }
    //   });

    //   if (!!detections && !!faceMatcher) {
    //     let match = await descriptors.map((descriptor:any) => faceMatcher.findBestMatch(descriptor))
    //     setMatch(match)
    //   }
    // }
  }
  
  return <div>
    
    <p>あなたじゃん!Ho ho ho!</p>    
  </div>
}

export default PoseComponent;