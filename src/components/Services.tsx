import React from 'react';
import { Hammer, Ruler, Palette, Wrench, Home, Star } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Custom Furniture Design',
    description: 'Bespoke furniture pieces crafted to your exact specifications and style preferences.',
    features: ['Unique designs', 'Premium materials', 'Expert craftsmanship']
  },
  {
    icon: Home,
    title: 'Kitchen Cabinet Installation',
    description: 'Complete kitchen transformation with custom cabinets and professional installation.',
    features: ['Soft-close hinges', 'Custom storage', 'Modern finishes']
  },
  {
    icon: Ruler,
    title: 'Wood Floor Installation',
    description: 'Premium hardwood flooring installation with professional finishing.',
    features: ['Quality hardwood', 'Perfect finishing', 'Long-lasting durability']
  },
  {
    icon: Palette,
    title: 'Interior Woodwork',
    description: 'Complete interior woodwork including wardrobes, shelving, and built-ins.',
    features: ['Built-in storage', 'Custom wardrobes', 'Architectural details']
  },
  {
    icon: Wrench,
    title: 'Furniture Repair',
    description: 'Professional furniture restoration and repair services for all wood furniture.',
    features: ['Restoration', 'Refinishing', 'Structural repairs']
  },
  {
    icon: Star,
    title: 'Gypsum Fitting',
    description: 'Professional gypsum ceiling and wall installations with modern designs.',
    features: ['Modern designs', 'LED integration', 'Professional finish']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From custom furniture design to complete home woodwork solutions, 
            we provide comprehensive services to transform your space.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-lg group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <service.icon className="h-6 w-6 text-amber-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
}