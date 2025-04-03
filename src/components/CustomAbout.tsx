
import React from "react";
import { ChartPie, Target, TrendingUp, Users } from "lucide-react";

const CustomAbout = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-hive-gray mb-12">
          About Hive Business Analytics
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-lg text-hive-gray mb-6 leading-relaxed">
              Hive Business Analytics is a leading data analytics company that helps businesses
              transform their raw data into actionable insights. Founded in 2015, we have
              assisted over 150 companies across various industries to leverage the power
              of their data for strategic decision-making.
            </p>
            <div className="flex items-start mb-6">
              <ChartPie className="text-hive-amber mr-4 h-8 w-8" />
              <div>
                <h3 className="font-semibold text-xl mb-2 text-hive-blue">Data-Driven Solutions</h3>
                <p className="text-hive-gray">
                  Our analytics solutions are tailored to meet the specific needs of your business,
                  ensuring you get insights that directly impact your bottom line.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Target className="text-hive-amber mr-4 h-8 w-8" />
              <div>
                <h3 className="font-semibold text-xl mb-2 text-hive-blue">Innovation Focus</h3>
                <p className="text-hive-gray">
                  We continuously invest in the latest technologies and methodologies to ensure
                  our clients benefit from cutting-edge analytics capabilities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Users className="text-hive-amber mr-4 h-8 w-8" />
              <div>
                <h3 className="font-semibold text-xl mb-2 text-hive-blue">Expert Team</h3>
                <p className="text-hive-gray">
                  Our team consists of experienced data scientists, engineers, and analysts who are
                  passionate about helping businesses succeed through data.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-hive-lightgray rounded-lg">
          <div className="flex items-start">
            <TrendingUp className="text-hive-amber mr-4 h-8 w-8" />
            <div>
              <h3 className="font-semibold text-xl mb-2 text-hive-blue">Our Approach</h3>
              <p className="text-hive-gray leading-relaxed">
                At Hive, we believe in a collaborative approach to data analytics. We work closely
                with our clients to understand their business objectives, challenges, and data landscape.
                This enables us to develop customized solutions that address specific business needs and
                deliver measurable results. Our proven methodology combines technical expertise with
                business acumen to extract maximum value from your data assets and drive strategic growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAbout;
