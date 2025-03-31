
import React from "react";
import { 
  BarChart3, 
  LineChart, 
  PieChart, 
  TrendingUp, 
  Users, 
  Target,
  Database,
  PresentationChart,
  BrainCircuit,
  ArrowRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Database className="h-10 w-10 text-hive-amber" />,
      title: "Data Integration",
      description:
        "We collect and integrate data from multiple sources to create a unified view of your business.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-hive-amber" />,
      title: "Business Intelligence",
      description:
        "Transform raw data into meaningful insights with custom dashboards and reports.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-hive-amber" />,
      title: "Predictive Analytics",
      description:
        "Forecast future trends and outcomes to make data-driven decisions with confidence.",
    },
    {
      icon: <Users className="h-10 w-10 text-hive-amber" />,
      title: "Customer Analytics",
      description:
        "Understand your customers better by analyzing behavior, preferences, and feedback.",
    },
    {
      icon: <Target className="h-10 w-10 text-hive-amber" />,
      title: "Performance Optimization",
      description:
        "Identify inefficiencies and opportunities to improve business performance.",
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-hive-amber" />,
      title: "AI & Machine Learning",
      description:
        "Implement advanced algorithms to uncover hidden patterns and automate processes.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-hive-lightgray honeycomb-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-hive-amber">Services</span>
          </h2>
          <p className="text-hive-gray max-w-2xl mx-auto">
            We offer a comprehensive suite of data analytics services to help your
            business make smarter decisions and achieve sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-hive-gray text-base">
                  {service.description}
                </CardDescription>
                <a href="#contact" className="mt-4 inline-flex items-center text-hive-amber hover:text-hive-gold font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Need a custom analytics solution?
            </h3>
            <p className="text-hive-gray mb-6">
              We specialize in creating bespoke data solutions tailored to your specific business needs.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-hive-amber hover:bg-hive-gold text-white font-medium py-3 px-6 rounded-md transition-colors duration-200"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
