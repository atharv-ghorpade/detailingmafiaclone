import { Award, Target, Heart, Wrench, Users, Car, TrendingUp, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const coreValues = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Commitment to the highest standards in automotive service and repair.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction and safety are our top priorities.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accurate diagnostics and quality workmanship every time.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest recommendations and transparent pricing always.'
    }
  ];

  const teamMembers = [
    {
      name: 'Michael Rodriguez',
      title: 'Master Technician',
      experience: '20+ years',
      specialty: 'Engine Diagnostics',
      image: 'https://images.unsplash.com/photo-1656156775128-7df95b7a79c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTg5NTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'David Chen',
      title: 'Senior Mechanic',
      experience: '15+ years',
      specialty: 'Transmission Specialist',
      image: 'https://images.unsplash.com/photo-1656156775128-7df95b7a79c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTg5NTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'James Wilson',
      title: 'Lead Technician',
      experience: '12+ years',
      specialty: 'Electrical Systems',
      image: 'https://images.unsplash.com/photo-1656156775128-7df95b7a79c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTg5NTMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years in Business' },
    { number: '5000+', label: 'Cars Serviced' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '25+', label: 'Certifications' }
  ];

  return (
    <div className="pt-32 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596986952526-3be237187071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwc2hvcHxlbnwxfHx8fDE3NjE4MjI2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10 px-[0px] py-[10px]"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-blue-900 px-6 py-2 transform -skew-x-12 mb-6">
            <span className="inline-block transform skew-x-12 uppercase tracking-wide">About Us</span>
          </div>
          <h1 className="mb-6">
            About Shri Krishna Automobile
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted automotive service partner with over 15 years of excellence in car care and repair
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-900 text-white px-6 py-2 transform -skew-x-12 mb-6">
                <span className="inline-block transform skew-x-12 uppercase tracking-wide">Our Story</span>
              </div>
              <h2 className="mb-6 text-black">
                Building Trust Since 2008
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2008, Shri Krishna Automobile began with a simple mission: to provide honest, reliable, and professional automotive services to our community. What started as a small garage with two mechanics has grown into a full-service automotive center trusted by thousands.
                </p>
                <p>
                  Over the years, we've invested in cutting-edge diagnostic equipment, continuous training for our team, and building lasting relationships with our customers. Our commitment to quality and transparency has made us the go-to choice for car owners who demand the best.
                </p>
                <p>
                  Today, we're proud to serve our community with a team of ASE-certified technicians, state-of-the-art facilities, and a customer-first approach that sets us apart from the competition.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1573324488183-cc5de8e9f84a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtZWNoYW5pYyUyMGRpYWdub3N0aWN8ZW58MXx8fHwxNzYxODk1MzE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Mechanic working on car diagnostics"
                className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-lg shadow-2xl">
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-4xl">15+</div>
                  <div className="text-sm uppercase tracking-wide">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-900 text-white px-6 py-2 transform -skew-x-12 mb-6">
              <span className="inline-block transform skew-x-12 uppercase tracking-wide">Our Core Values</span>
            </div>
            <h2 className="mb-4 text-black">
              The Principles That Guide Everything We Do
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-900 hover:shadow-xl transition-shadow">
                  <div className="bg-blue-900 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-4 transform -skew-x-12">
                    <div className="transform skew-x-12">
                      <Icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="mb-3 text-black">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-blue-900 text-white px-6 py-2 transform -skew-x-12 mb-6">
              <span className="inline-block transform skew-x-12 uppercase tracking-wide">Our Professional Team</span>
            </div>
            <h2 className="mb-4 text-black">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ASE-certified technicians dedicated to keeping your vehicle running smoothly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 className="text-white mb-1">{member.name}</h3>
                    <p className="text-blue-300">{member.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-sm text-gray-500">Experience</div>
                      <div className="text-black">{member.experience}</div>
                    </div>
                    <Wrench className="w-6 h-6 text-blue-900" />
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">Specialty</div>
                    <div className="text-black">{member.specialty}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-900 w-24 h-24 rounded-lg flex items-center justify-center mx-auto mb-4 transform -skew-x-12">
                  <div className="transform skew-x-12 text-4xl">{stat.number}</div>
                </div>
                <div className="uppercase tracking-wide text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-6">
            Ready to Experience the Shri Krishna Difference?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied customers who trust us with their vehicles
          </p>
          <button className="relative inline-block group">
            <div className="relative h-14 px-10 flex items-center justify-center cursor-pointer">
              <div className="absolute inset-0 bg-white hover:bg-gray-100 transition-colors transform -skew-x-12"></div>
              <span className="relative z-10 text-blue-900 uppercase tracking-wide">
                Book Your Appointment Today
              </span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
