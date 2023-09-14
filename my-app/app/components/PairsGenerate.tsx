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
        <button onClick={generate}>Generate Pairs</button>
    </div>
  )
}

export default PairsGenerate