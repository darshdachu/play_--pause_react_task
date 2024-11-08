// import React from 'react'
// import VIDEO from "./components/videos/rocky.mp4.mp4"
// import { useState } from 'react'
// import { useRef } from 'react'
// import "./App.css"

// const App = () => {
//   let [play,setPlay]=useState(true)

//   let videoRef=useRef();

//   let playOrPause=()=>{
//     setPlay(!play);
//     if(play ===true){
//       videoRef.current.play();

//     }else{
//       videoRef.current.pause();
//     }
//   }
//   return (
//     <div>

//       <section id='videoBlock'>
//         <article>
//         <video src={VIDEO} ref={videoRef}></video>
//         <button onClick={playOrPause}>{play ?"play":"pause"}</button>
//         </article>
//       </section>

//     </div>
//   )
// }

// export default App

// ------------------------------------------------------------------

// import React from 'react'
// import VIDEO from "./components/videos/rocky.mp4.mp4"
// import { useState } from 'react'
// import { useRef } from 'react';

// const App = () => {

//   let [state,setState]=useState(true) ;

//   let VidRef=useRef()
  
//   let PlayOrPause=()=>{
//       setState(!state)

//       if(state === true){
//         VidRef.current.play();
//       }
//       else{
//         VidRef.current.pause()
//       }
//   }
  

//   return (
//     <div>
//       <video  src={VIDEO} ref={VidRef}></video>
//       <button onClick={PlayOrPause}>{state ? "Play" : "Pause"}</button>
//     </div>
//   )
// }

// export default App

// -------------------------------------------------------------------
