import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-green-800">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Features</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-green-800">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-green-800">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">API Docs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-green-800">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600">GitHub</a>
              <a href="#" className="text-gray-600 hover:text-green-600">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-green-600">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          © {new Date().getFullYear()} Ecultify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
