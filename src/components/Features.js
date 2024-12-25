import React from "react";

const Features = () => {
  const features = [
    {
      title: "Track Every Action",
      description: "Never lose track of what's been done and what works",
      icon: "/images/icon 1.png", 
    },
    {
      title: "Measure Real Impact",
      description: "See how each change affects your bottom line",
      icon: "/images/icon 2.png",
    },
    {
      title: "Achieve Your Goals",
      description: "Set targets and watch your progress in real-time",
      icon: "/images/icon 3.png", 
    },
  ];

  return (
    <section className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-4xl font-bold mb-16">
          Stop guessing what works, Start knowing what drives results!
        </h2>

        {/* Features Flexbox */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-12 space-y-12 md:space-y-0">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full flex items-center justify-center w-0, h-0 my-7">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-100% h-96 object-contain "
                />
              </div>
              <h3 className="text-xl font-bold mt-6">{feature.title}</h3>
              <p className="text-gray-300 mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
