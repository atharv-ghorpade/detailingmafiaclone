import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

const testimonials = [
  {
    name: 'John Smith',
    location: 'Car Owner',
    rating: 5,
    text: 'Outstanding service! They fixed my engine problem quickly and the price was very reasonable. Highly recommend!',
    vehicle: '',
  },
  {
    name: 'Sarah Johnson',
    location: 'Business Owner',
    rating: 5,
    text: "I've been bringing my fleet here for 3 years. Always professional, efficient, and trustworthy.",
    vehicle: '',
  },
  {
    name: 'Mike Davis',
    location: 'Local Resident',
    rating: 5,
    text: 'Best auto shop in town. They explain everything clearly and never try to upsell unnecessary services.',
    vehicle: '',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-900 text-white px-4 py-2 rounded-full mb-4">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            What Our <span className="text-blue-900">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real reviews from satisfied customers
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <Quote className="w-12 h-12 text-blue-900 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-blue-900 text-blue-900" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Client info */}
                    <div className="border-t pt-4">
                      <div className="mb-1">{testimonial.name}</div>
                      <div className="text-sm text-blue-900">{testimonial.location}</div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}