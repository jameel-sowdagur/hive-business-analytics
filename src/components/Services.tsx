import React from "react";
import { cn } from "@/lib/utils";
import { Presentation, BarChart3, Database, TrendingUp } from "lucide-react";

const servicesData = [
  {
    title: "Data Visualization",
    description: "Transform raw data into compelling visuals for better insights.",
    icon: Presentation,
  },
  {
    title: "Business Intelligence",
    description: "Gain a competitive edge with data-driven strategic decisions.",
    icon: BarChart3,
  },
  {
    title: "Data Warehousing",
    description: "Centralize your data for comprehensive analysis and reporting.",
    icon: Database,
  },
  {
    title: "Predictive Analytics",
    description: "Forecast future trends and make proactive adjustments.",
    icon: TrendingUp,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-hive-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-hive-gray mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <service.icon className="text-hive-amber mr-3 h-6 w-6" />
                <h3 className="text-xl font-semibold text-hive-gray">
                  {service.title}
                </h3>
              </div>
              <p className="text-hive-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
