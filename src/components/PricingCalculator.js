import React, { useState } from "react";

const PricingCalculator = () => {
  const [skuCount, setSkuCount] = useState(3); 
  const basePrice = 49.99;
  const additionalPricePerSku = 14.99;

  // Calculate the total price
  const calculatePrice = () => {
    if (skuCount <= 3) return basePrice;
    const additionalSkus = skuCount - 3;
    return basePrice + additionalSkus * additionalPricePerSku;
  };

  const pricingOptions = [
    3, 5, 10, 15, 20, 25, 50, 100, 250, 500, 1000
  ];

  return (
    <div className="flex flex-col items-center bg-gray-200 p-6 sm:p-8 md:p-10 rounded-sm shadow-sm w-full sm:w-3/4 md:w-1/2 mx-auto">
      <h1 className="text-gray-800 text-lg sm:text-xl md:text-2xl font-bold mb-6 text-center">
        Pricing based on SKU count
      </h1>

      <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-md rounded-full px-6 py-4 w-full mb-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <button
            className="bg-blue-500 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-full focus:outline-none"
          >
            Number of SKU's
          </button>
        </div>

        {/* Price */}
        <div className="flex items-center">
          <span className="bg-blue-500 text-white text-sm sm:text-base font-semibold px-4 py-2 rounded-full">
            ${calculatePrice().toFixed(2)}
          </span>
        </div>
      </div>

      {/* Dropdown for SKU Count */}
      <select
        value={skuCount}
        onChange={(e) => setSkuCount(parseInt(e.target.value))}
        className="w-full bg-white border border-gray-300 rounded-full text-gray-600 px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      >
        {pricingOptions.map((option) => (
          <option key={option} value={option}>
            {option} SKUs
          </option>
        ))}
      </select>

      {/* Email Promo */}
      {/* <button className="mt-8 px-6 py-3 bg-secondary border border-gray-300 rounded-full text-white hover:bg-blue-600 focus:outline-none">
        START 7 DAY FREE TRIAL
      </button> */}
    </div>
  );
};

export default PricingCalculator;
