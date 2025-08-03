import React from 'react';

// Images
import i1 from '../assets/image/i1.png';
import i2 from '../assets/image/i2.jpg';
import i3 from '../assets/image/i3.jpeg';
import i4 from '../assets/image/i4.jpeg';
import i5 from '../assets/image/i5.jpeg';

// Videos
import v1 from '../assets/image/v1.mp4';
import v2 from '../assets/image/v2.mp4';
import v3 from '../assets/image/v3.mp4';
import v4 from '../assets/image/v4.mp4';

function Categories() {
  return (
    <>
      {/* iPhone Section */}
      <div className="flex justify-center items-center bg-gray-100 pt-5">
        <div className="text-center p-4">
          <h1 className="text-4xl font-semibold">iPhone</h1>
          <p className="pt-4 text-xl text-gray-900">Meet the iPhone 16 family.</p>
          <button className="bg-blue-700 text-white p-2 h-14 w-1/3 mr-4 rounded-full mt-4 hover:bg-blue-600 transition">
            Learn more
          </button>
          <button className="border-2 border-blue-700 text-blue-700 p-2 h-14 w-1/3 rounded-full mt-4 hover:bg-blue-100 transition">
            Shop iPhone
          </button>
          <p className="text-lg mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
            Built for Apple intelligence.
          </p>
          <img src={i1} alt="iPhone 16" className="h-80 mt-3 mx-auto object-contain" />
        </div>
      </div>

      {/* MacBook Air Section */}
      <div className="flex justify-center items-center pt-5 mt-4 pb-3 bg-gradient-to-b from-sky-100 to-gray-100">
        <div className="text-center p-4">
          <h1 className="text-4xl font-semibold">MacBook Air</h1>
          <p className="pt-4 text-xl text-gray-900">
            Sky Blue color. <br /> Sky-high performance with M4 chip.
          </p>
          <button className="bg-blue-700 text-white p-2 h-14 w-1/3 mr-4 rounded-full mt-4 hover:bg-blue-600 transition">
            Learn more
          </button>
          <button className="border-2 border-blue-700 text-blue-700 p-2 h-14 w-1/4 rounded-full mt-4 mb-2 hover:bg-blue-100 transition">
            Buy
          </button>
          <video
            className="w-full object-cover mx-auto pt-3 rounded-md"
            src={v2}
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          />
          <p className="text-lg mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
            Built for Apple intelligence.
          </p>
        </div>
      </div>

      {/* iPad Pro Section */}
      <div className="flex justify-center items-center pt-5 mt-4 pb-3 bg-black">
        <div className="text-center p-4 shadow-2xl">
          <h1 className="text-4xl text-white font-semibold">iPad Pro</h1>
          <p className="pt-4 text-xl text-white">Unbelievably thin. Incredibly powerful.</p>
          <button className="bg-blue-700 text-white p-2 h-14 w-1/3 mr-4 rounded-full mt-4 hover:bg-blue-600 transition">
            Learn more
          </button>
          <button className="border-2 border-blue-700 text-blue-700 p-2 h-14 w-1/4 rounded-full mt-4 mb-2 hover:bg-blue-100 transition">
            Buy
          </button>
          <video
            className="w-full object-cover mx-auto pt-3 rounded-md"
            src={v3}
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          />
          <p className="text-lg mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
            Built for Apple intelligence.
          </p>
        </div>
      </div>

      {/* Apple Watch Section */}
      <div className="flex justify-center items-center bg-white mt-5">
        <div className="text-center bg-white shadow-xl p-6">
          <h1 className="text-3xl font-bold pt-8">WATCH</h1>
          <p className="text-base font-bold">SERIES 10</p>
          <p className="pt-2 text-xl text-gray-900">The instant classic.</p>
          <button className="bg-blue-700 text-white p-2 h-14 w-1/3 mr-4 rounded-full mt-4 hover:bg-blue-600 transition">
            Learn more
          </button>
          <button className="border-2 border-blue-800 text-blue-700 p-2 h-14 w-1/4 rounded-full mt-4 hover:bg-blue-100 transition">
            Buy
          </button>
          <img src={i4} alt="Apple Watch Series 10" className="h-72 w-full mt-3 object-contain mx-auto" />
        </div>
      </div>

      {/* Mac Section */}
      <div className="flex justify-center items-center bg-white pt-10">
        <div className="text-center bg-white relative p-6">
          <img src={i5} alt="Mac" className="w-auto mt-3 mx-auto object-contain" />
          <button
            className="bg-white absolute bottom-4 left-1/2 transform -translate-x-1/2 text-black p-2 h-14 w-1/3 rounded-full mt-4 border border-black hover:bg-black hover:text-white transition"
          >
            Learn more
          </button>
        </div>
      </div>

      {/* AirPods Section */}
      <div className="flex justify-center items-center bg-white pt-5">
        <div className="relative text-center w-full p-6">
          <img src={i2} alt="AirPods 4" className="w-full h-72 object-cover" />
          <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl font-semibold drop-shadow-[3px_3px_0px_rgb(30,64,175)]">AirPods 4</h1>
            <p className="pt-4 text-xl text-center drop-shadow-[3px_3px_0px_rgb(30,64,175)]">
              Iconic. Now supersonic.<br />
              Available with Active Noise Cancellation.
            </p>
            <div className="flex gap-4 mt-4">
              <button className="bg-blue-700 text-white p-2 h-14 w-1/3 rounded-full hover:bg-blue-600 transition">
                Learn more
              </button>
              <button className="border-2 border-blue-800 text-blue-700 p-2 h-14 w-1/4 rounded-full hover:bg-blue-100 transition">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MacBook Pro Section */}
      <div className="flex justify-center items-center pt-5 mt-4 pb-3 bg-black">
        <div className="text-center p-6">
          <h1 className="text-4xl font-semibold text-white">MacBook Pro</h1>
          <p className="pt-4 text-xl text-white">A work of smart.</p>
          <button className="bg-blue-700 text-white p-2 h-14 w-1/3 mr-4 rounded-full mt-4 hover:bg-blue-600 transition">
            Learn more
          </button>
          <button className="border-2 border-blue-600 text-blue-600 p-2 h-14 w-1/4 rounded-full mt-4 mb-2 hover:bg-blue-100 transition">
            Buy
          </button>
          <img src={i3} alt="MacBook Pro" className="w-4/5 mt-3 mx-auto object-contain" />
          <p className="text-lg mt-6 font-semibold bg-gradient-to-r from-blue-600 via-pink-700 to-orange-600 text-transparent bg-clip-text inline-block">
            Built for Apple intelligence.
          </p>
        </div>
      </div>

      {/* Trade In Section */}
      <div className="flex justify-center items-center pt-5 mt-4 bg-gray-100 pb-10">
        <div className="text-center p-6">
          <h1 className="text-4xl font-semibold">Trade In</h1>
          <p className="pt-4 text-xl text-gray-900">Upgrade and save. It's that easy.</p>
          <button className="bg-blue-700 text-white p-2 h-14 w-3/4 mr-4 rounded-full mt-4 hover:bg-blue-600 transition">
            Get your estimate
          </button>
          <video
            className="w-full object-cover mx-auto pt-8 rounded-md"
            src={v4}
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          />
        </div>
      </div>
    </>
  );
}

export default Categories;
