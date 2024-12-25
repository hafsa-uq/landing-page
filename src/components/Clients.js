import React from "react";

const Clients = () => {
  const sections = [
    {
      title: "For Amazon Sellers",
      subtitle: "Stay in control while scaling your Amazon business",
      items: [
        {
          title: "Growth Catalyst",
          description: "Uncover the exact actions that boost your Amazon sales and rankings",
          icon: "/images/G.png", 
        },
        {
          title: "Monitor Progress",
          description: "Track every optimization in real-time with clear ROI metrics for each action taken",
          icon: "/images/Bl.png",
        },
        {
          title: "Data Decision",
          description: "Turn complex Amazon data into clear, profitable actions with instant market insights",
          icon: "/images/19.png",
        },
        {
          title: "Growth Targets",
          description: "Scale your Amazon presence with customized growth roadmaps and milestone tracking",
          icon: "/images/20.png",
        },
      ],
      bgColor: "bg-gray-200 text-primary",
    },
    {
      title: "For Amazon Agencies",
      subtitle: "Your clients want results. We help you prove them.",
      items: [
        {
          title: "Show Impact",
          description: "Measure ROI for every keyword change, content update, and price adjustment",
          icon: "/images/tick.png",
        },
        {
          title: "Track Goals",
          description: "Set and monitor customized KPIs for each client",
          icon: "/images/plus.png",
        },
        {
          title: "Performance History",
          description: "Maintain a searchable history of all improvements",
          icon: "/images/15.png",
        },
        {
          title: "Build Trust",
          description: "Share real-time updates on optimization efforts",
          icon: "/images/16.png",
        },
      ],
      bgColor: "bg-gray-200 text-primary",
    },
  ];

  return (
    <div>
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`${section.bgColor} py-16`}
        >
          <div className="max-w-7xl mx-auto px-6">
            {/* Section Title */}
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-4 bg-secondary w-full md:w-2/6 py-6 px-4 rounded-lg mx-auto">
              {section.title}
            </h2>
            <p className="text-center text-gray-700 mb-12">
              {section.subtitle}
            </p>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="bg-blue-100 rounded-full flex items-center justify-center mb-4 w-0, h-0 my-7">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-100% h-96 object-contain"
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-bold mt-14">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="mt-2 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
      
    </div>
  );
};

export default Clients;
