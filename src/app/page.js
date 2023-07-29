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

  //[95vh]
  return (
    <main className="flex min-h-[95vh] flex-col items-start justify-between top-0 sm:pt-10 pt-5 px-5 sm:px-20 font-body">
      {randomQuote ? (
        <>
          <div className='flex justify-between items-center w-full'>
            <h2 className='font-medium'> Quotes</h2>
            <h2 className=' font-bold '> {indexQuote} </h2>
            <h2 className='font-extrabold'> .GenQoutes</h2>

          </div>

          <div className=' text-left  '>
            <p className='sm:text-5xl text-3xl sm:leading-[4rem] leading-[3rem] mt-10 capitalize font-extrabold max-w-3xl'>{randomQuote.text}</p>

          </div>
          <div className='flex justify-between items-center sm:flex-row flex-col  flex-nowrap  '>

            <div className='flex justify-center flex-col space-y-2 sm:w-[35%] w-full'>
              <h5 className='sm:text-3xl mt-8 font-bold text-xl  '>{randomQuote.author || "Anonymous"}</h5>
              <h5 className=' font-medium pl-1'> Lived</h5>
              <h5 className=' font-medium pl-1'> 1881/1955</h5>
              <h5 className=' font-medium pl-1'> new jersey</h5>
              <h5 className=' font-medium pl-1'> united states</h5>
              {/*  */}
            </div>

            <div className=' flex sm:justify-evenly  justify-between items-center  flex-row sm:w-[90%] w-full '>
              <div className='sm:w-[50%] w-full sm:pt-16 sm:mt-0 mt-6'>
                <p className='font-bold '> Pablo Ruiz Picasso (25 October 1881 – 8 April 1973) was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. One of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention ...</p>
              </div>

              <div className='mt-10 sm:flex-none sm:relative fixed right-10  sm:bottom-0 bottom-[10rem] '>
                <button
                  onClick={ranIndexHandling}
                  className=' bg-neutral-300 sm:flex top-[480px] right-5 border-2 sm:w-20 sm:h-20 w-16 h-16 pt-1 font-bold flex justify-center items-center  hover:delay-100  rounded-full'> Gen
                </button>
              </div> </div>

          </div>

        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </main>
  )
}
