import React from "react";
import SectionTitle from "../ui/SectionTitle";

type Step = {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
};

type HowItWorksProps = {
  steps: Step[];
};

const HowItWorks: React.FC<HowItWorksProps> = ({ steps }) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          title="How It Works"
          subtitle="Order in just a few easy steps"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              <div
                className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mb-4`}
              >
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="title-lg mb-2">{step.title}</h3>
              <p className="subtitle-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
