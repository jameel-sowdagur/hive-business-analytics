
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
              Founded by industry experts with over 20 years of combined experience, Hive Business Analytics specializes 
              in leveraging Artificial Intelligence (AI) and Machine Learning (ML) to transform raw data into actionable insights.
            </p>
            
            <p className="text-hive-gray mb-6">
              We are a team of experienced data scientists, statisticians, and software developers dedicated to empowering 
              businesses with advanced analytics solutions. Our expertise spans across AI-driven data modeling, predictive 
              analytics, and intelligent automation, enabling organizations to make data-backed decisions with confidence.
            </p>
            
            <p className="text-hive-gray mb-6">
              With extensive experience in surveys and data collection, we offer end-to-end data collection through both 
              Computer-Assisted Personal Interviewing (CAPI) and Paper-and-Pencil Interviewing (PAPI) methodologies. 
              Our highly trained pool of interviewers is ready to conduct data collection efficiently and accurately, 
              ensuring the highest data quality for your business needs.
            </p>
            
            <p className="text-hive-gray mb-6">
              At Hive Business Analytics, we believe that every organization, regardless of its size, should have access to 
              cutting-edge analytics tools and insights. Our team works collaboratively to deliver innovative solutions that 
              drive measurable business impact.
            </p>
            
            <p className="text-hive-gray mb-10">
              Let us help you harness the power of data to fuel your success.
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
              <h4 className="font-bold text-xl mb-4 text-hive-blue">Our Approach</h4>
              <p className="text-hive-gray mb-4">
                We combine cutting-edge AI technology with deep industry expertise to deliver insights 
                that drive meaningful business outcomes. Our data-driven approach ensures that every 
                solution is tailored to your specific business challenges and opportunities.
              </p>
              <p className="text-hive-gray mb-4">
                By integrating advanced machine learning algorithms with robust statistical methods, 
                we can identify patterns, predict trends, and uncover insights that might otherwise 
                remain hidden in your data.
              </p>
              <p className="text-hive-gray">
                Our collaborative process involves working closely with your team to understand your 
                business goals, designing custom analytics solutions, and implementing them in a way 
                that delivers maximum value and ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
