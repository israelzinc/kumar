import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { loadModels, getFullFaceDescription, createMatcher, getOverlayValues, getRandomMask } from '../api/face';

// Import face profile
const JSON_PROFILE = require('../descriptors/bnk48.json');

const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

interface IVideoInputState {
    fullDesc: any;
    detections: any;
    descriptors: any;
    faceMatcher: any;
    match: any;
    facingMode: any;
}


class VideoInput extends Component<{},IVideoInputState> {
  webcam: React.RefObject<Webcam>;
  interval: NodeJS.Timeout ;
//   webcam: Webcam;
  constructor(props: any) {
    super(props);
    this.interval = setInterval(() => {},1500);
    this.webcam = React.createRef<Webcam>();
    this.state = {
      fullDesc: null,
      detections: null,
      descriptors: null,
      faceMatcher: null,
      match: null,
      facingMode: ''
    };
  }

  componentWillMount = async () => {
    await loadModels();    
    this.setState({ faceMatcher: await createMatcher(JSON_PROFILE) });
    this.setInputDevice();
  };

  setInputDevice = () => {
    navigator.mediaDevices.enumerateDevices().then(async devices => {      
      let inputDevice = await devices.filter(
        device => device.kind === 'videoinput'
      );
      if (inputDevice.length < 2) {
        await this.setState({
          facingMode: 'user'
        });
      } else {
        await this.setState({
          facingMode: { exact: 'environment' }
        });
      }
      this.startCapture();
    });
  };

  startCapture = () => {
    this.interval = setInterval(() => {
      this.capture();
    }, 1500);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  capture = async () => {
    if (!!this.webcam.current) {
      await getFullFaceDescription(
        this.webcam.current.getScreenshot(),
        inputSize
      ).then(fullDesc => {
        if (!!fullDesc) {
          // const scale = originalImage.width / originalImage.naturalWidth
          // const scale = 10;
          const overlayValues = getOverlayValues(fullDesc.landmarks)
          // console.log("overlayValues",overlayValues);
          // const overlay = document.createElement("img")
          // overlay.src = getRandomMask()
          // overlay.alt = "mask overlay."
          // overlay.style.cssText = `
          // position: absolute;
          // left: ${overlayValues.leftOffset * scale}px;
          // top: ${overlayValues.topOffset * scale}px;
          // width: ${overlayValues.width * scale}px;
          // transform: rotate(${overlayValues.angle}deg);
        

          this.setState({
            detections: [overlayValues]
          })
          // item.appendChild(overlay)
          // const overlayValues = fullDesc.landmarks;
          // this.setState({
          //   detections: fullDesc.map(fd => fd.detection),
          //   descriptors: fullDesc.map(fd => fd.descriptor)
          // });
        }
      });

      if (!!this.state.descriptors && !!this.state.faceMatcher) {
        let match = await this.state.descriptors.map((descriptor:any) =>
          this.state.faceMatcher.findBestMatch(descriptor)
        );
        this.setState({ match });
      }
    }
  };

  render() {
    const { detections, match, facingMode } = this.state;
    let videoConstraints = null;
    let camera = '';
    if (!!facingMode) {
      videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        facingMode: facingMode
      };
      if (facingMode === 'user') {
        camera = 'Front';
      } else {
        camera = 'Back';
      }
    }

    let drawBox = null;
    if (!!detections) {
      drawBox = detections.map((detection:any, i:number) => {
        console.log("Detection",detection);
        const overlayValues = detection;
        // console.log("overlayValues",overlayValues);
        // let scale = 10;
        const scale = WIDTH / HEIGHT;
        const overlay = document.createElement("img")
        overlay.src = getRandomMask()
        overlay.alt = "mask overlay."
        overlay.style.cssText = `
        position: absolute;
        left: ${overlayValues.leftOffset * scale}px;
        top: ${overlayValues.topOffset * scale}px;
        width: ${overlayValues.width * scale}px;
        transform: rotate(${overlayValues.angle}deg);
        `
        return (
            <div key={i}>
              <img              
                src={getRandomMask()}
                style={{
                  position: 'absolute', 
                  left: `${overlayValues.leftOffset * scale}px;`,
                  top: `${overlayValues.topOffset * scale}px;`,
                  width: `${overlayValues.width * scale}px;`,
                  transform: `rotate(${overlayValues.angle}deg)`
                }}
              ></img>                             
            </div>
        );




        // OLD STUFF
        // console.log("DETECTOU!",detection);
        // let _H = detection.box.height;
        // let _W = detection.box.width;
        // let _X = detection.box._x;
        // let _Y = detection.box._y;
        // return (
        //   <div key={i}>
        //     <div
        //       style={{
        //         position: 'absolute',
        //         border: 'solid',
        //         borderColor: 'red',
        //         height: _H,
        //         width: _W,
        //         transform: `translate(${_X}px,${_Y}px)`
        //       }}
        //     >
        //       {!!match && !!match[i] ? (
        //         <p
        //           style={{
        //             backgroundColor: 'blue',
        //             border: 'solid',
        //             borderColor: 'blue',
        //             width: _W,
        //             marginTop: 0,
        //             color: '#fff',
        //             transform: `translate(-3px,${_H}px)`
        //           }}
        //         >
        //           {match[i]._label}
        //         </p>
        //       ) : null}
        //     </div>
        //   </div>
        // );
      });
    }

    return (
      <div
        className="Camera"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <p>Camera: {camera}</p>
        <div
          style={{
            width: WIDTH,
            height: HEIGHT
          }}
        >
          <div style={{ position: 'relative', width: WIDTH }}>
            {!!videoConstraints ? (
              <div style={{ position: 'absolute' }}>
                <Webcam
                  audio={false}
                  width={WIDTH}
                  height={HEIGHT}
                  ref={this.webcam as any}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
              </div>
            ) : null}
            {!!drawBox ? drawBox : null}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoInput;