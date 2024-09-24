import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = () => {
  return (
    <section id="products" className="bg-white py-20 mt-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard title="Ecultify CRM" description="Manage your customer relationships effectively with our intuitive CRM system." />
          <ProductCard title="Ecultify Analytics" description="Gain valuable insights into your business performance with our advanced analytics tool." />
          <ProductCard title="Ecultify Marketing" description="Streamline your marketing efforts with our all-in-one marketing platform." />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
