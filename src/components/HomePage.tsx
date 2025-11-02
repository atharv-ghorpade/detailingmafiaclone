import { Hero } from './Hero';
import { Services } from './Services';
import { WhyChooseUs } from './WhyChooseUs';
import { Testimonials } from './Testimonials';

export function HomePage({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'services' | 'experience' | 'blog' | 'contact' | 'booking') => void }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
