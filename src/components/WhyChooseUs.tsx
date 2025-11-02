import { Shield, Clock, Award, ThumbsUp, MapPin, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certified Mechanics',
    description: 'All our technicians are ASE certified with years of experience',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock emergency roadside assistance available',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: '12-month warranty on all parts and labor',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            Excellence in every aspect of <span className="text-blue-900">automotive care</span>
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}