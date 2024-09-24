import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-green-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <PricingCard 
            title="Starter" 
            price="$29" 
            features={["Basic analytics", "5 team members", "24/7 support"]} 
          />
          <PricingCard 
            title="Pro" 
            price="$79" 
            features={["Advanced analytics", "Unlimited team members", "Priority support", "Custom integrations"]} 
            highlighted={true} 
          />
          <PricingCard 
            title="Enterprise" 
            price="Custom" 
            features={["Full suite of features", "Dedicated account manager", "Onboarding assistance", "Custom development"]} 
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
