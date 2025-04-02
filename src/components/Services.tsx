
import React from "react";
import { cn } from "@/lib/utils";
import { FileSpreadsheet, Smartphone, GraduationCap, BarChart3, Database, Presentation, TrendingUp } from "lucide-react";

const servicesData = [
  {
    title: "Survey Research and Analysis",
    description: "Collect and analyze data through structured surveys to uncover valuable insights.",
    icon: FileSpreadsheet,
  },
  {
    title: "Mobile App Development",
    description: "Create custom mobile solutions that align with your business goals and user needs.",
    icon: Smartphone,
  },
  {
    title: "Technical Training and Upskills",
    description: "Enhance your team's capabilities with specialized training in AI, machine learning, and data science technologies.",
    icon: GraduationCap,
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
    title: "Data Visualization",
    description: "Transform raw data into compelling visuals for better insights.",
    icon: Presentation,
  },
  {
    title: "Predictive Analytics",
    description: "Forecast future trends using machine learning and make proactive adjustments.",
    icon: TrendingUp,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-8 bg-hive-lightgray">
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
