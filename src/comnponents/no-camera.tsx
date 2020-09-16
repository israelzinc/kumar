import React from "react"

function NoCamera() {
  return <div>
    <img
      src={"https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png"}      
      className="d-inline-block align-top"
      height={50}
      alt="camera-logo"
    />
    <span>カメラ信号を受信できませんでした</span>
  </div>
}

export default NoCamera