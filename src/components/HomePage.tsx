import { Hero } from './Hero';
import { Services } from './Services';
import { WhyChooseUs } from './WhyChooseUs';
import { Testimonials } from './Testimonials';

export function HomePage({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'services' | 'service-detail' | 'experience' | 'blog' | 'contact' | 'booking', serviceTitle?: string) => void }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
}
