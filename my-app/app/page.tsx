"use client"
import Image from 'next/image'
import PairsGenerate from './components/PairsGenerate'
import React,{useState,useEffect} from 'react'
interface Students{
  id : number,
  firstName : string,
  lastName : string
}
export default function Home() {
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
    <main className="p-4">
      <PairsGenerate setData={SetData} />
      <div>
        {data.map((pair:Students[], pairIndex) => (
          <div key={pairIndex} className="mb-4">
            <p className="text-xl font-semibold">Pair {pairIndex + 1}:</p>
            <p className="text-lg">
              {pair[0].firstName} {pair[0].lastName} 🤝 {pair[1].firstName} {pair[1].lastName}
            </p>
          </div>
        ))}
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={copyPairs}>
          Copy Pairs
        </button>
      </div>
    </main>
  )
}
