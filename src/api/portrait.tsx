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
        left:`${width-(width/2)-10}px`,
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
        left: `${-width}px`,
        top: `${(-2*height)*0.9}px`,
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
        left: `${26}px`,
        // top: `${-height * 0.6}px`,
        // transform: `scale(${scale})`
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

  const flowerPositions = [
    { top: height - (height * 0.8), left: width - (width / 2), scale },
    { top: height - (height * 0.8) + 100, left: width - (width / 2), scale: scale *2},
    { top: height - (height * 0.8) + 100, left: width - (width / 2) - 90, scale },
    { top: height - (height * 0.8) + 100, left: width - (width / 2) - 180, scale: scale*0.4 },
    { top: height - (height * 0.8) - 80, left: width - (width / 2) + 20, scale: scale*1.5 },
    { top: height - (height * 0.8) - 160, left: width - (width / 2) + 20, scale: scale*0.7 },
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
