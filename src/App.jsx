import React, { useState } from 'react'

function App() {
  
  const [color, setcolor] = useState("white")
  return (
    <>
    <div className='w-full h-screen duration-200' 
    style={{backgroundColor: color}}>
      
      <div className='fixed flex flex-wrap justify-center inset-x-0 px-2 bottom-11'>
        <div className='flex flex-wrap justify-center gap-3 bg-white shadow-xl rounded-xl px-3 py-2'>
          <button
          onClick={()=>{setcolor("red")}} 
          className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "red"}}>Red</button>

          <button
          onClick={()=>{setcolor("blue")}} 
          className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "blue"}}>Blue</button>
          <button
          onClick={()=>{setcolor("green")}} 
          className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "green"}}>Green</button>
          <button
          onClick={()=>{setcolor("purple")}} 
          className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "purple"}}>Purple</button>
          <button
          onClick={()=>{setcolor("black")}} 
          className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "black"}}>Black</button>
          <button
          onClick={()=>{setcolor("pink")}} 
          className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "pink"}}>Pink</button>
          <button
          onClick={()=>{setcolor("yellow")}} 
          className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button
          onClick={()=>{setcolor("orange")}} 
          className='outline-none px-4 py-2 text-white rounded-xl' style={{backgroundColor: "orange"}}>Orange</button>
        </div>
      </div>

      <h1 className='font-bold text-2xl text-center py-20 text-green-200'>
        Background Color Changer
      </h1>
    </div>
    </>
   
  ) 
}

export default App
