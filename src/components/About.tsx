
import React from "react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const benefits = [
    "Data-driven decision making",
    "Increased operational efficiency",
    "Enhanced customer insights",
    "Better resource allocation",
    "Competitive market advantage",
    "Improved risk management",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-hive-amber">Hive</span> Business Analytics
            </h2>
            
            <p className="text-hive-gray mb-6">
              Founded by industry experts with over 20 years of combined experience, 
              Hive Business Analytics is dedicated to helping businesses leverage their 
              data to achieve exceptional results.
            </p>
            
            <p className="text-hive-gray mb-10">
              We believe that every organization, regardless of size, should have access 
              to powerful analytics tools and insights. Our team of data scientists, 
              analysts, and business consultants work collaboratively to deliver solutions 
              that create real business impact.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-hive-amber mr-2" />
                  <span className="text-hive-gray">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-hive-amber/20 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-hive-blue/10 rounded-full"></div>
            
            <div className="relative bg-white shadow-xl rounded-lg p-8 z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6">
                  <h3 className="text-5xl font-bold text-hive-amber mb-2">20+</h3>
                  <p className="text-hive-gray">Data Experts</p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-5xl font-bold text-hive-amber mb-2">600+</h3>
                  <p className="text-hive-gray">Projects Completed</p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-5xl font-bold text-hive-amber mb-2">98%</h3>
                  <p className="text-hive-gray">Client Satisfaction</p>
                </div>
                <div className="text-center p-6">
                  <h3 className="text-5xl font-bold text-hive-amber mb-2">12+</h3>
                  <p className="text-hive-gray">Years Experience</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold mb-2 text-hive-blue">Our Approach</h4>
                <p className="text-sm text-hive-gray">
                  We combine industry expertise with advanced analytics methodologies 
                  to deliver insights that matter to your business. Our collaborative 
                  approach ensures that solutions are not only technically sound but 
                  also practically applicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
