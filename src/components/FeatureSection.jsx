import React from 'react';
import FeatureCard from './FeatureCard';
import { Users, TrendingUp, Zap } from 'lucide-react';

const FeatureSection = () => {
  return (
    <section id="features" className="bg-green-50 py-20 m-3 mt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon={<Users className="h-10 w-10 text-green-600" />} title="Team Collaboration" description="Foster teamwork and boost productivity with our advanced collaboration tools." />
          <FeatureCard icon={<TrendingUp className="h-10 w-10 text-green-600" />} title="Growth Analytics" description="Track and analyze your business growth with our powerful analytics dashboard." />
          <FeatureCard icon={<Zap className="h-10 w-10 text-green-600" />} title="Automation" description="Streamline your processes and save time with our intelligent automation features." />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
