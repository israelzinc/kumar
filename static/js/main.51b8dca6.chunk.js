(this.webpackJsonpkumar=this.webpackJsonpkumar||[]).push([[0],{20:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/big.6f377308.png"},29:function(e,t,a){e.exports=a(43)},34:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),o=a.n(r),c=(a(34),a(20),a(15)),i={colorPrimary:"#011f43",colorGreen:"#5CB85C",colorBlue:"#1C7CD5",colorCyan:"#56C0E0",colorRed:"#D9534F",colorYellow:"#FFC108",logsGray:"#2B2B2B",logsBlack:"#191919",palette:["#DDDDDD","#777777","#55595C","#373A3C"]},s=(0,a(15).createUseStyles)((function(e){return{mainLayout:{height:"100vh",position:"relative",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",fontSize:"12pt","& > .simple-column":{width:"100%",height:"100%",flexGrow:1,color:e.palette[4],backgroundColor:e.palette[0],overflowY:"scroll"}}}})),u=a(18),m=a(22),f=a.n(m),p=function(e){var t=e.mainElement,a=s();return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{bg:"dark",variant:"dark"},l.a.createElement(u.a.Brand,{href:"#home"},l.a.createElement("img",{src:f.a,width:"40",height:"40",className:"d-inline-block align-top",alt:"React Bootstrap logo"}),"\u304f\u307e\u30e2\u30f3\uff11\uff10\u5e74\u9031")),l.a.createElement("div",{className:a.mainLayout},l.a.createElement("div",{className:"simple-column"},t)))},d=function(e){return l.a.createElement(c.ThemeProvider,{theme:i},l.a.createElement(p,e))},v=a(26),g=a(17),h=a(12);var b=function(){return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_960_720.png",className:"d-inline-block align-top",height:50,alt:"camera-logo"}),l.a.createElement("span",null,"\u30ab\u30e1\u30e9\u4fe1\u53f7\u3092\u53d7\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f"))},E=a(9),y=a.n(E),k=a(13),w=a(23),x=a(24),C=a(28),D=a(27),B=a(8),I=a(25),S=a.n(I),j=function(e,t){var a=e/420*.4;return l.a.createElement("div",null,l.a.createElement("img",{src:"/kumar/kumamon/10_years_logo.png",style:{position:"absolute",left:"".concat(e-e/2-25,"px"),top:"".concat(.4*-t,"px"),transform:"scale(".concat(a,")")}}))},O=function(e){Object(C.a)(a,e);var t=Object(D.a)(a);function a(e){var n;return Object(w.a)(this,a),(n=t.call(this,e)).webcam=void 0,n.interval=void 0,n.componentWillMount=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setInputDevice();case 1:case"end":return e.stop()}}),e)}))),n.setInputDevice=function(){navigator.mediaDevices.enumerateDevices().then(function(){var e=Object(k.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.filter((function(e){return"videoinput"===e.kind}));case 2:e.sent.length<2&&n.setState({facingMode:"user"}),n.startCapture();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},n.startCapture=function(){n.interval=setInterval((function(){n.capture()}),1500)},n.capture=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Capturing nothing!");case 1:case"end":return e.stop()}}),e)}))),n.interval=setInterval((function(){}),1500),n.webcam=l.a.createRef(),n.state={balloon:null,leftBear:null,flowers:null,anniversary:null,facingMode:"",ibagem:null,tomato:null},n}return Object(x.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"saveImage",value:function(){if(this.webcam.current){var e=this.webcam.current.getCanvas();if(e){var t=e.getContext("2d");if(t){if(null!=this.state.anniversary){console.log("ADDING image to context");var a=function(e,t){var a=e/420*.4,n=new Image;return n.src="img/base.png",{image:n,x:.4*-t,y:e-e/2-10,wdith:420*a,height:283*a}}(320,420);t.drawImage(a.image,0,0)}window.open(e.toDataURL("image/png"));var n=e.toDataURL("png"),l=document.createElement("a");l.href=n,l.download="image.png",l.click()}else console.log("Context problem")}else console.log("Canvas problem")}else console.log("Webcam REF problem")}},{key:"addPanel",value:function(e){var t,a;switch(e){case"kumamon":if(this.state.anniversary)this.setState({anniversary:null});else{var n=j(320,420);this.setState({anniversary:n})}break;case"flowers":if(this.state.flowers)this.setState({flowers:null});else{var r=function(e,t){var a=e/420*.4,n=[{top:t-.8*t,left:e-e/2-20,scale:a},{top:t-.8*t+100,left:e-e/2-20-20,scale:2*a},{top:t-.8*t+100,left:e-e/2-90-20,scale:a},{top:t-.8*t+100,left:e-e/2-180-20,scale:.4*a},{top:t-.8*t-80,left:e-e/2-10-20,scale:1.5*a},{top:t-.8*t-160,left:e-e/2-20-20,scale:.7*a}];return l.a.createElement("div",null,n.map((function(e){return l.a.createElement("img",{src:"/kumar/kumamon/flowers.png",style:{position:"absolute",left:"".concat(e.left,"px"),top:"".concat(e.top,"px"),transform:"scale(".concat(e.scale,")")}})})))}(320,420);this.setState({flowers:r})}break;case"left-bear":if(this.state.leftBear)this.setState({leftBear:null});else{var o=l.a.createElement("div",null,l.a.createElement("img",{src:"/kumar/kumamon/left_bear.png",style:{position:"absolute",left:"".concat(-50,"px")}}));this.setState({leftBear:o})}break;case"balloon":if(this.state.balloon)this.setState({balloon:null});else{var c=(t=320,a=420,l.a.createElement("div",null,l.a.createElement("img",{src:"/kumar/kumamon/balloon.png",style:{position:"absolute",left:"".concat(-t-260,"px"),top:"".concat(-2*a*.95,"px"),transform:"scale(".concat(.1,")")}})));this.setState({balloon:c})}break;case"tomato":if(this.state.tomato)this.setState({tomato:null});else{var i=l.a.createElement("div",null,l.a.createElement("img",{src:"/kumar/kumamon/tomato.png",style:{position:"absolute",left:"".concat(-80,"px"),top:"".concat(130,"px"),transform:"scale(".concat(.5,")")}}));this.setState({tomato:i})}}}},{key:"render",value:function(){var e=this,t=this.state,a=t.facingMode,n=t.ibagem,r=t.balloon,o=t.anniversary,c=t.flowers,i=t.leftBear,s=t.tomato,u=null;return a&&(u={width:320,height:420,facingMode:a},"user"===a?"Front":"Back"),l.a.createElement("div",null,l.a.createElement("div",{className:"Camera",style:{display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("div",{style:{width:320,height:420}},l.a.createElement("div",{style:{position:"relative",width:320}},u?l.a.createElement("div",{style:{position:"absolute"}},l.a.createElement(S.a,{audio:!1,width:320,height:420,ref:this.webcam,mirrored:!0,screenshotFormat:"image/jpeg",videoConstraints:u})):null,n||null,r||null,o||null,c||null,i||null,s||null))),l.a.createElement("div",{className:"Filters",style:{display:"flex",flexDirection:"column",alignItems:"center"}},l.a.createElement("label",null,"\u30d5\u30a3\u30eb\u30bf\u30fc\u9078\u629e"),l.a.createElement(h.a,null,l.a.createElement(B.a,{variant:null!=o?"secondary":"info",size:"sm",onClick:function(){return e.addPanel("kumamon")}},"\u8a95\u751f\u65e5")," ",l.a.createElement(B.a,{variant:null!=c?"secondary":"danger",size:"sm",onClick:function(){return e.addPanel("flowers")}},"\u82b1")," ",l.a.createElement(B.a,{variant:null!=i?"secondary":"info",size:"sm",onClick:function(){return e.addPanel("left-bear")}},"\u5de6\u304f\u307e\u30e2\u30f3")," ",l.a.createElement(B.a,{variant:null!=r?"secondary":"danger",size:"sm",onClick:function(){return e.addPanel("balloon")}},"\u98a8\u8239")," ",l.a.createElement(B.a,{variant:null!=s?"secondary":"info",size:"sm",onClick:function(){return e.addPanel("tomato")}},"\u30c8\u30de\u30c8")," ")))}}]),a}(n.Component);var F=function(){var e=Object(n.useState)(!0),t=Object(v.a)(e,2),a=t[0],r=t[1],o=function(e){r(e)};return l.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},a?l.a.createElement(O,null):l.a.createElement(b,null),l.a.createElement("br",null),l.a.createElement("label",null,"\u30ab\u30e1\u30e9"),l.a.createElement(h.a,{toggle:!0},l.a.createElement(g.a,{key:"0",type:"radio",variant:"secondary",name:"radio",value:"ON",checked:a,onClick:function(e){return o(!0)}},"\u30aa\u30f3"),l.a.createElement(g.a,{key:"1",type:"radio",variant:"secondary",name:"radio",value:"OFF",checked:!a,onClick:function(e){return o(!1)}},"\u30aa\u30d5")))};var N=function(){return l.a.createElement(d,{mainElement:l.a.createElement(F,null)})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.51b8dca6.chunk.js.map