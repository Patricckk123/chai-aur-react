import { useState ,useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [length, setLength] =useState(8);
  const [num,setNum] =useState(false);
  const [char,setChar]=useState(false);
  const [password,setPassword]=useState('');

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num){
      str+="1234567980"
    }
    if(char){
      str+="!@#$%^&*(){}~`[]"
    }
    for(let i=1;i<=length;i++)
    {
      let char =Math.floor(Math.random()* str.length +1)
      pass +=str.charAt(char)
    }
    setPassword(pass)
  },[length,num,char,setPassword])

  useEffect(() => {
    
    passwordGenerator()
  
    
  }, [length,num,char])
  
  return (
    <>
      
     
      <div className=' max-w-md mx-auto shadow-md rounded px-4 my-8 text-orange-50 font-bold mb-5'
      >
        <div className='flex'>
        <input type="text" value={password} className='outline-none w-full py-2 px-2 bg-amber-200 text-amber-900' placeholder='Password Generator' readOnly ></input>
        <button className='bg-blue-400'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
          <label>Length: {length}</label>
          <input type="checkbox" defaultChecked={num} id="num" onChange={()=>{setNum((prev) => !prev)}} />
          <label htmlFor='numberInput'>Numbers</label>
          <input type="checkbox" defaultChecked={char} id="char" onChange={()=>{setChar((prev) => !prev)}} />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>

     
      </div>
      </>
  )
}

export default App
