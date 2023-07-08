"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react'; 



export default function Home() {

  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);
  const [indexQuote , setIndexQuote] = useState(null);

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
    <main className="flex min-h-screen flex-col items-start justify-between pt-10 px-20">
               {randomQuote ? (
                  <> 
                  <div className='flex justify-between items-center w-full'> 
                    <h2> genQoutes</h2>
                    <h2 className=' font-bold '> {indexQuote} </h2>
                  </div>

                   <div className=' text-left  '>
                   <p className='text-4xl leading-[4rem] capitalize font-extrabold max-w-3xl'>{randomQuote.text}</p>
                   <h5  className='text-xl mt-8'>{randomQuote.author || "Anonymous"}</h5>
                   </div>
                 
                    <button  
                        onClick={ranIndexHandling}
                       className='text-neutral-700 px-3 py-2 border-2 border-neutral-700 '> generate
                      </button>
                  </>
                ) : (
                  <h2>Loading...</h2>
                )}
    </main>
  )
}
