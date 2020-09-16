import React from "react";
import Webcam from "react-webcam";
// import * as posenet from '@tensorflow-models/posenet';



function Camera() {

  const webcamRef = React.useRef<any>(null);

  const capture = React.useCallback(
    () => {
      if (webcamRef === null || webcamRef.current === null ) { return; }
      const imageSrc = webcamRef.current.getScreenshot();      
      console.log("ImageSrc",imageSrc)    
    },
    [webcamRef]
  );

  // const loadModel = async () => {
  //   // const net = await posenet.load();

  //   const imageScaleFactor = 0.50;
  //   const flipHorizontal = false;
  //   const outputStride = 16;
  //   // const imageElement = document.getElementById('cat');
  //   const imageElement = webcamRef;
  //   // load the posenet model
  //   const net = await posenet.load();
  //   const pose = await net.estimateSinglePose(imageElement);
  // }

  function onUserMedia(a:any) {
    console.log("AAAA",a);
  }
  const videoConstraints = {
    width: 800,
    height: 600,
    facingMode: "user"
  };
  
  return <div>
    <Webcam videoConstraints={videoConstraints} onUserMedia={onUserMedia}/>    
    <p>あなたじゃん!</p>    
    {/* {webcamRef!=null?<img src={webcamRef.toString()} />:null} */}
  </div>
}

export default Camera;