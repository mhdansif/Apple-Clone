import React from "react";

function Emi() {
  return (
    <>
      {/* Desktop / Medium and up */}
      <div className="hidden md:flex items-center justify-center gap-2 text-gray-700 text-[13px] bg-white py-2">
        <p className="m-0">
          For a limited time,<sup>§</sup> shop tax-free on select products in certain states<sup>‡</sup>  — online and in-store.
        </p>
        <span className="flex items-center text-blue-700 cursor-pointer hover:underline ml-2">
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>

      {/* Mobile / Small */}
      <div className="md:hidden text-black text-[15px] bg-white p-4">
        <p className="m-0">
          For a limited time,<sup>§</sup> shop tax-free on select products in certain states<sup>‡</sup>  — online and in-store.
          <a
            href="#"
            className="items-center inline text-blue-700 font-semibold cursor-pointer hover:underline pl-[5px]"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="inline w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </p>
      </div>
    </>
  );
}

export default Emi;
