import React from 'react';
import Button from "./ui/Button"; 
import Input from "./ui/Input"; 



const CallToActionSection = () => {
  return (
    <section className="bg-green-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Join thousands of satisfied customers and take your business to the next level with Ecultify.</p>
        <div className="flex justify-center items-center space-x-4">
          <Input className="max-w-xs" placeholder="Enter your email" type="email" />
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
