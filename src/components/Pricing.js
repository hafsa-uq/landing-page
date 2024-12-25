import React, { memo } from "react";
import PricingCalculator from "./PricingCalculator";
import { FaCheckCircle } from "react-icons/fa"; 
import { Link } from "react-router-dom";


const FeatureRow = memo(({ feature, isEven }) => (
  <tr
    className={`${
      isEven ? "bg-gray-100" : "bg-white"
    } hover:bg-gray-200 transition-all ease-in-out duration-200 border-b border-gray-300`}
  >
    <td className="w-1/3 p-6 font-medium text-gray-700 border-r-4 border-primary">
      {feature.title}
    </td>
    <td className="w-2/3 p-6 text-gray-600">
      <ul className="list-disc ml-6 space-y-2 text-sm">
        {feature.details.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </td>
  </tr>
));

const Pricing = () => {
  const features = React.useMemo(
    () => [
      {
        title: "Dedicated Account Manager",
        details: [
          "Your personal Amazon expert guiding your growth strategy",
          "Weekly performance reviews and action plans",
          "Direct access via chat, email, and calls",
          "Proactive optimization recommendations",
        ],
      },
      {
        title: "Track Every Dollar Spent",
        details: [
          "Real-time ROI tracking for all optimizations",
          "See exactly how each change affects your bottom line",
          "Monitor advertising ROAS instantly",
          "Prevent wasteful spending",
        ],
      },
      {
        title: "Complete Performance Visibility",
        details: [
          "Live sales and profit tracking",
          "Real-time ranking positions",
          "Traffic and conversion metrics",
          "Competitor performance alerts",
        ],
      },
      {
        title: "Never Miss a Sale",
        details: [
          "Instant low stock alerts",
          "Buy Box monitoring",
          "Pricing optimization alerts",
          "Demand forecasting",
        ],
      },
      {
        title: "Save Time & Resources",
        details: [
          "Automated weekly reports",
          "Centralized communication hub",
          "One dashboard for all metrics",
          "Bulk optimization tools",
        ],
      },
      {
        title: "Team/Agency Oversight",
        details: [
          "Track every change made to your account",
          "Measure team/agency performance",
          "Clear ROI for all activities",
          "Hold team/agency accountable",
        ],
      },
      {
        title: "Profit Maximization",
        details: [
          "SKU-level profitability analysis",
          "Storage fee optimization",
          "Inventory level recommendations",
          "Margin improvement insights",
        ],
      },
      {
        title: "Team Collaboration",
        details: [
          "Task assignment and tracking",
          "Shared notes and updates",
          "Performance metrics by team member",
          "Centralized file storage",
        ],
      },
      {
        title: "Goal Achievement",
        details: [
          "Custom target setting",
          "Progress tracking",
          "Milestone notifications",
          "Performance benchmarking",
        ],
      },
      {
        title: "Market Intelligence",
        details: [
          "Category trend analysis",
          "Competitor monitoring",
          "Search term optimization",
          "Market share tracking",
        ],
      },
    ],
    []
  );

  return (
    <div>
      <div className="p-8 text-center mt-16">
        <h1 className="text-4xl font-bold text-primary">Full Service Amazon Optimization for Every Seller</h1>
        <p className="mt-4 text-lg text-gray-800">Save 80% on your Amazon management costs while maintaining full control</p>
      </div>

      <PricingCalculator />

      <div className="bg-gray-50 p-8 rounded-lg shadow-lg max-w-7xl mx-auto mt-6">
        <h2 className="text-3xl font-semibold text-center mb-6 text-secondary">
          What's Included in Every Plan:
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-3 text-left font-semibold text-lg">Feature</th>
                <th className="px-6 py-3 text-left font-semibold text-lg">Details</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <FeatureRow key={index} feature={feature} isEven={index % 2 === 0} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

     {/* Last Section with Checkmarks and Button */}
<div className="bg-gray-100 py-10 mt-8">
  <h2 className="text-center text-blue-500 text-3xl sm:text-4xl font-bold mb-8 sm:mb-16">
    Used by 500+ Amazon sellers managing over $100M in sales
  </h2>
  <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-10 sm:space-y-0 space-y-6">
    {/* Left Column */}
    <div className="bg-blue-600 text-white rounded-lg p-6 max-w-xs sm:max-w-sm flex-1 shadow-md">
      <ul className="space-y-4">
        <li className="flex items-center">
          <FaCheckCircle className="text-2xl mr-3 text-white" />
          <span>Streamlined Operations & Communication</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-2xl mr-3 text-white" />
          <span>Maximized Business Profitability</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-2xl mr-3 text-white" />
          <span>Complete Team & Agency Accountability</span>
        </li>
      </ul>
    </div>

    {/* Right Column */}
    <div className="bg-blue-600 text-white rounded-lg p-6 max-w-xs sm:max-w-sm flex-1 shadow-md">
      <ul className="space-y-4">
        <li className="flex items-center">
          <FaCheckCircle className="text-2xl mr-3 text-white" />
          <span>Simple, Transparent Pricing Based on Your SKU Count</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-2xl mr-3 text-white" />
          <span>No long-term contracts</span>
        </li>
        <li className="flex items-center">
          <FaCheckCircle className="text-2xl mr-3 text-white" />
          <span>Cancel anytime</span>
        </li>
      </ul>
    </div>
  </div>

  {/* Button */}
  <div className="text-center mt-8">
    <Link to="/demo" className="bg-blue-500 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition">
      Join 500+ Growing Amazon Sellers
    </Link>
  </div>
</div>
    </div>
  );
};

export default Pricing;
