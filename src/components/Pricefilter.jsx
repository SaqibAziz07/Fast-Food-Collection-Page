import React from "react";

function Pricefilter({ init, price, setfun }) {
  return (
    <div className="p-2">
      <div className="flex justify-between items-center text-gray-300 font-medium text-sm mb-4">
        <span>Min: ${price.min}</span>
        <span>Max: ${price.max}</span>
      </div>
      <div className="flex justify-center items-center gap-4">
        <p className="font-bold text-lg text-gray-300">${init.min}</p>
        <input
          type="range"
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
          value={init.max}
          min={price.min}
          max={price.max}
          onChange={(e) => {
            setfun({
              ...init,
              max: Number(e.target.value),
              isApplied: true,
            });
          }}
        />
        <p className="font-bold text-lg text-green-500">${init.max}</p>
      </div>
    </div>
  );
}

export default Pricefilter;
