import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Webcam from 'react-webcam';
import { getFlowersComponent, getAnniversaryComponent, getLeftBearComponent, getBalloonComponent, getAnniversaryImage, getTomatoBearComponent } from '../api/portrait';

const WIDTH = 320;
// const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

interface IVideoInputState {
  balloon: any;
  leftBear: any;
  flowers: any;
  anniversary: any;
  facingMode: any;
  ibagem: any;
  tomato: any;
}


class VideoInput extends Component<{}, IVideoInputState> {
  webcam: React.RefObject<Webcam>;
  interval: NodeJS.Timeout;
  //   webcam: Webcam;
  constructor(props: any) {
    super(props);
    this.interval = setInterval(() => { }, 1500);
    this.webcam = React.createRef<Webcam>();
    this.state = {
      balloon: null,
      leftBear: null,
      flowers: null,
      anniversary: null,
      facingMode: '',
      ibagem: null,
      tomato: null
    };
  }

  componentWillMount = async () => {        
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
    console.log("Capturing nothing!");    
  };

  saveImage() {
    if(!this.webcam.current) {
      console.log("Webcam REF problem");
      return;
    }
    const canvas = this.webcam.current.getCanvas();


    if(!canvas) {
      console.log("Canvas problem");
      return;
    }

    const context = canvas.getContext('2d');    

    if (!context) {
      console.log("Context problem");
      return;
    }    


    if(this.state.anniversary != null) {
      console.log("ADDING image to context")
      let data = getAnniversaryImage(WIDTH, HEIGHT);            
      context.drawImage(data.image, 0, 0);      
    }
    
    
    window.open(canvas.toDataURL('image/png'));
    var gh = canvas.toDataURL('png');

    var a = document.createElement('a');
    a.href = gh;
    a.download = 'image.png';

    a.click()
}

  addPanel(panelName:string) {

    let ibagem = null;
    switch(panelName) {
      case "kumamon":
        if (!this.state.anniversary) {
          let anniversary = getAnniversaryComponent(WIDTH, HEIGHT);
          this.setState({ anniversary });
        } else {
          this.setState({anniversary: null})
        }        
        break;

      case "flowers":
        if (!this.state.flowers) {
          let flowers = getFlowersComponent(WIDTH, HEIGHT);
          this.setState({ flowers });
        } else {
          this.setState({ flowers: null })
        }        
        break;

      case 'left-bear':
        if (!this.state.leftBear) {
          let leftBear = getLeftBearComponent(WIDTH, HEIGHT);
          this.setState({ leftBear });
        } else {
          this.setState({ leftBear: null })
        }        
        break;
      case 'balloon':
        if (!this.state.balloon) {
          let balloon = getBalloonComponent(WIDTH, HEIGHT);
          this.setState({ balloon });
        } else {
          this.setState({ balloon: null })
        }        
        break;
      case 'tomato':
        if (!this.state.tomato) {
          let tomato = getTomatoBearComponent(WIDTH, HEIGHT);
          this.setState({ tomato });
        } else {
          this.setState({ tomato: null })
        }
        break;
    }

    
  
  }

  render() {
    const {  facingMode, ibagem, balloon, anniversary, flowers, leftBear, tomato } = this.state;
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

    return (
      <div>
      <div
        className="Camera"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* <p>Camera: {camera}</p> */}
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
                  mirrored={true}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />
                
              </div>
              
            ) : null}            
            {/* {!!drawBox ? drawBox : null} */}
              {!!ibagem ? ibagem : null}
              {!!balloon ? balloon : null}
              {!!anniversary ? anniversary : null}
              {!!flowers ? flowers : null}
              {!!leftBear ? leftBear : null}    
              {!!tomato ? tomato : null}              
          </div>
          
        </div>
      </div>      
      <div
          className="Filters"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
        <label>フィルター選択</label>
        <ButtonGroup>
            <Button variant={anniversary!=null?"secondary":"info"} size="sm" onClick={() => this.addPanel("kumamon")}>誕生日</Button>{' '}
            <Button variant={flowers != null ? "secondary" : "danger"} size="sm" onClick={() => this.addPanel("flowers")}>花</Button>{' '}
            <Button variant={leftBear != null ? "secondary" : "info"} size="sm" onClick={() => this.addPanel("left-bear")}>左くまモン</Button>{' '}
            <Button variant={balloon != null ? "secondary" : "danger"} size="sm" onClick={() => this.addPanel("balloon")}>風船</Button>{' '}
            <Button variant={tomato != null ? "secondary" : "info"} size="sm" onClick={() => this.addPanel("tomato")}>トマト</Button>{' '}
          </ButtonGroup>
      </div>
        {/* <Button onClick={() => this.saveImage()}>SaveImage</Button> */}
      </div>
    );
  }
}

export default VideoInput;