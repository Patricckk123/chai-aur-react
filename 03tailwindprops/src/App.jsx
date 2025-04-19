import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
    return (
    <>
      <h1>Vite + React</h1>
      {/*  */}
      {/* <div class="flex flex-col items-center gap-6 p-7  md:gap-8 rounded-2xl"> */}
  {/* <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/30327991/pexels-photo-30327991/free-photo-of-historic-fort-in-okzitanien-france.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
  </div> */}
  <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
       
      </div>
      <Cards username="Pratik"></Cards>
{/* </div> */}
    </>
  )
}

export default App
