"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';



export default function Home() {

  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);
  const [indexQuote, setIndexQuote] = useState(null);

  useEffect(() => {

    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);

      console.log(data)
      let ranIndex = Math.floor(Math.random() * data.length);
      setIndexQuote(ranIndex);
      setRandomQuote(data[ranIndex])
    }
    fetchData();

  }, [])


  const ranIndexHandling = () => {
    let ranIndex = Math.floor(Math.random() * quotes.length);
    setIndexQuote(ranIndex);
    setRandomQuote(quotes[ranIndex]);

  }

  useEffect(() => {
    console.log('random quote:', randomQuote);
  }, [randomQuote]);


  return (
    <main className="flex min-h-[95vh] flex-col items-start justify-between top-0 pt-10 px-20 font-body">
      {randomQuote ? (
        <>
          <div className='flex justify-between items-center w-full'>
            <h2 className='font-medium'> Quotes</h2>
            <h2 className=' font-bold '> {indexQuote} </h2>
            <h2 className='font-extrabold'> .GenQoutes</h2>
          </div>

          <div className=' text-left  '>
            <p className='text-5xl leading-[4rem] capitalize font-extrabold max-w-3xl'>{randomQuote.text}</p>

          </div>
          <div className='flex justify-between items-center '>

            <div className='flex justify-center flex-col space-y-2'>
              <h5 className='text-3xl mt-8 font-bold'>{randomQuote.author || "Anonymous"}</h5>
              <h5 className=' font-medium pl-1'> Lived</h5>
              <h5 className=' font-medium pl-1'> 1881/1955</h5>
              <h5 className=' font-medium pl-1'> new jersey</h5>
              <h5 className=' font-medium pl-1'> united states</h5>
              {/* <button
                onClick={ranIndexHandling}
                className='text-neutral-700  py-2 border-2 rounded-3xl px-4 border-neutral-700 '> generate
              </button> */}
            </div>
            
            <div className='w-[50%] pt-16'>
              <p className='font-bold'> Pablo Ruiz Picasso (25 October 1881 – 8 April 1973) was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention ...</p>
            </div>

            <div className=' w-20 h-20  bg-slate-400 rounded-full pt-8'>
        
            </div>

          </div>

        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  )
}
