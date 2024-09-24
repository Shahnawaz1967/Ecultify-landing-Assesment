import React from 'react';
import Button from "./ui/Button";  
import { ChevronRight } from 'lucide-react';

const HomeSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center mt-4">
      <h1 className="text-5xl font-bold text-green-800 mb-6">Grow Your Business with Ecultify</h1>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
        Ecultify helps you cultivate success by providing innovative solutions for sustainable business growth.
      </p>
      <div className="flex justify-center space-x-4">
        <Button size="lg">
          Start Free Trial
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </div>
    </section>
  );
};

export default HomeSection;
