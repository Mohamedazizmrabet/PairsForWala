"use client"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
interface Props{
    setData:React.Dispatch<React.SetStateAction<never[]>>
}
function PairsGenerate(props:Props) {
    const generate=async ()=>{
        try {
            const result = await axios.get("http://localhost:3000/genarate/pairs")
            console.log(result.data);
            props.setData(result.data)
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
  return (
    <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded absolute right-0 top-1" onClick={generate}>Generate Pairs</button>
    </div>
  )
}

export default PairsGenerate