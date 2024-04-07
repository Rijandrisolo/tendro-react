import React from "react";

import "../index.css";

export default function Index() {
  return (
    <>
      <div className='flex flex-wrap'>
        <div
          className='text-center border-solid border-2 border-indigo-600 '
          id='top'
        >
          <p className='text-center text-lg text-purple-800 font-bold'>
            Les tops produits
          </p>
          <div className='flex align-center align-middle '>
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className='border border-gray-400 p-4 w-3/12 mx-16 my-3.5 min-h-48
                 shadow-lg shadow-zinc-900'
              >
                <div className='border border-gray-400 bg-gray-400 min-h-60'>
                  Top {i + 1}
                </div>

                <div className='border border-gray-400 bg-green-400 min-h-14'>
                  <p>Prix</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          id='story'
          className='text-center border-solid border-2 border-indigo-600 flex'
        >
          <div className='border-solid border-2 border-indigo-600'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              aliquid quaerat iste odit eum in nostrum nisi eius veritatis,
              natus voluptas iusto labore commodi maxime repellat, architecto
              at. At atque rerum blanditiis modi fugiat reprehenderit? Maiores
              quibusdam molestias deserunt illum, aspernatur soluta quas
              repellendus est.
            </p>
          </div>
          <div className='border-solid border-2 border-indigo-600'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              aliquid quaerat iste odit eum in nostrum nisi eius veritatis,
              natus voluptas iusto labore commodi maxime repellat, architecto
              at. At atque rerum blanditiis modi fugiat reprehenderit? Maiores
              quibusdam molestias deserunt illum, aspernatur soluta quas
              repellendus est.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
