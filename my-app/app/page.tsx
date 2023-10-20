"use client"
import Image from 'next/image'
import PairsGenerate from './components/PairsGenerate'
import React,{useState,useEffect} from 'react'
 
import { useRouter } from 'next/navigation'

interface Students{
  id : number,
  firstName : string,
  lastName : string
}
export default function Home() {
  const route=useRouter()
  const [data,SetData]=useState([])
  console.log(data);
  const copyPairs = () => {
    const formattedPairs = data.map((pair:Students[], pairIndex) => {
      return `Pair ${pairIndex + 1}: ${pair[0].firstName} ${pair[0].lastName} 🤝 ${pair[1].firstName} ${pair[1].lastName}`;
    }).join('\n'); // Join pairs with line breaks

    navigator.clipboard.writeText(formattedPairs).then(() => {
      alert('Pairs copied to clipboard!');
    }).catch((error) => {
      console.error('Failed to copy pairs:', error);
    });
  };

  return (
    <main className="p-4 flex justify-evenly">
      <h1 className="text-3xl font-semibold">Pairs Generator</h1>
         <nav className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105" onClick={copyPairs}>
            Copy Pairs
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105" onClick={function(){route.push(`addStudents?search=?x=`)}}>
            Add Students
          </button>
        </div>
      </nav>
      <PairsGenerate setData={SetData} />
      <div className="grid grid-cols-2 gap-4">
        {data.map((pair:[], pairIndex) => (
          <div key={pairIndex} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Pair {pairIndex + 1}</h2>
            {pair.map((student:Students, studentIndex:number) => (
              <div key={student.id} className="mb-2">
                <p className="text-lg font-semibold">{student.firstName} {student.lastName}</p>
                <p className="text-gray-500">ID: {student.id}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}