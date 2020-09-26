import React from 'react';

const BASE_URL = process.env.PUBLIC_URL + '/kumamon';

interface IComponentFunction {
  (width: number, height: number): any
}

export const getRandomStamp = () => {
  
  const stamps: string[] = [];

  const ten_years = '10_years_logo.png';

  stamps.push(ten_years);

  const index = Math.floor(stamps.length * Math.random())

  return BASE_URL+"/"+stamps[index];
}

export const getRandomComponent = (width: number, height: number) => {
  const components: IComponentFunction[] = []
  components.push(getAnniversaryComponent)

  const index = Math.floor(components.length * Math.random())

  return components[index](width,height)
}

export const getAnniversaryImage = (width:number, height: number) => {
  const ten_years = '10_years_logo.png';
  const source = BASE_URL + "/" + ten_years;
  const sourceWidth = 420;
  const sourceHeight = 283;
  const scale = (width / sourceWidth) * 0.4
  const baseImage = new Image();
  baseImage.src = 'img/base.png';
  return {
    image: baseImage,
    x: (-height * 0.4),
    y: (width - (width / 2) - 10),
    wdith:sourceWidth*scale,
    height: sourceHeight*scale
  }
}

export const getAnniversaryComponent = (width:number, height: number) => {
  const ten_years = '10_years_logo.png';
  const source = BASE_URL+"/"+ten_years;
  const sourceWidth = 420;
  const sourceHeight = 283;
  const scale = (width / sourceWidth)*0.4
  return (<div>
    <img
      src={source}
      style = {{
        position: 'absolute',
        left:`${width-(width/2)-25}px`,
        top: `${-height *0.4}px`,
        transform: `scale(${scale})`
      }}
    />
  </div>)
}

export const getBalloonComponent = (width: number, height: number) => {
  const imagem = 'balloon.png';
  const source = BASE_URL + "/" + imagem;
  const sourceWidth = 420;
  const sourceHeight = 283;
  const scale = (width / sourceWidth) * 0.4
  return (<div>
    <img
      src={source}
      style={{
        position: 'absolute',
        left: `${-width-260}px`,
        top: `${(-2*height)*0.95}px`,
        transform: `scale(${0.1})`
      }}
    />
  </div>)
}

export const getLeftBearComponent = (width: number, height: number) => {
  const imagem = 'left_bear.png';
  const source = BASE_URL + "/" + imagem;
  const sourceWidth = 420;
  const sourceHeight = 283;
  const scale = (width / sourceWidth) * 0.4
  return (<div>
    <img
      src={source}
      style={{
        position: 'absolute',
        left: `${-50}px`,
        // top: `${-height * 0.6}px`,
        // transform: `scale(${scale})`
      }}
    />
  </div>)
}

export const getTomatoBearComponent = (width: number, height: number) => {
  const imagem = 'tomato.png';
  const source = BASE_URL + "/" + imagem;
  const sourceWidth = 420;
  const sourceHeight = 283;
  const scale = (width / sourceWidth) * 0.4
  return (<div>
    <img
      src={source}
      style={{
        position: 'absolute',
        left: `${-80}px`,
        top: `${130}px`,
        transform: `scale(${0.5})`
      }}
    />
  </div>)  
}

export const getFlowersComponent = (width: number, height: number) => {
  const imagem = 'flowers.png';
  const source = BASE_URL + "/" + imagem;
  const sourceWidth = 420;
  const sourceHeight = 283;
  const scale = (width / sourceWidth) * 0.4
  const compensation = -20

  const flowerPositions = [
    { top: height - (height * 0.8), left: width - (width / 2) +compensation, scale },
    { top: height - (height * 0.8) + 100, left: width - (width / 2) -20 + compensation, scale: scale *2},
    { top: height - (height * 0.8) + 100, left: width - (width / 2) - 90 + compensation, scale },
    { top: height - (height * 0.8) + 100, left: width - (width / 2) - 180 + compensation, scale: scale*0.4 },
    { top: height - (height * 0.8) - 80, left: width - (width / 2) - 10 + compensation, scale: scale*1.5 },
    { top: height - (height * 0.8) - 160, left: width - (width / 2) - 20 + compensation, scale: scale*0.7 },
  ]
  return (<div>
    {flowerPositions.map(e => {
      return <img
        src={source}
        style={{
          position: 'absolute',
          left: `${e.left}px`,
          top: `${e.top}px`,
          transform: `scale(${e.scale})`
        }}
      />
    })}
    
  </div>)
}
