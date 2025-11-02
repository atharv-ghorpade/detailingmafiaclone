import {
  ChevronRight,
  Shield,
  Award,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import bgVideo from "../assets/videoplayback.mp4";

export function Hero({ onNavigate }: { onNavigate?: (page: 'home' | 'about' | 'services' | 'experience' | 'blog' | 'contact' | 'booking') => void }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20"
    >
      {/* Background video with overlay
          Note: place your video file at `src/assets/videoplayback.mp4` so Vite can bundle it.
      */}
      <div className="absolute inset-0 z-0">
        <video
          src={bgVideo}
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          poster=""
        />
  {/* ~60% black overlay to darken the video for legibility (user requested 60-70%) */}
  <div className="absolute inset-0 z-10 bg-black/60"></div>
  {/* subtle gradient on top of the base black layer for depth */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 pointer-events-none"></div>
      </div>

  <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block bg-blue-900 px-4 py-2 rounded-full mb-6">
              <span className="text-sm">
                Professional Automotive Service
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Your Trusted{" "}
              <span className="text-blue-900">
                Auto Care Experts
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Professional automotive service and repair with
              certified mechanics. Quality workmanship,
              affordable pricing, and guaranteed satisfaction.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button
                onClick={() => {
                  console.log('Hero: Book Appointment clicked');
                  onNavigate?.('booking');
                }}
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-lg">
                Book Appointment
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  console.log('Hero: View Services clicked');
                  onNavigate?.('services');
                }}
                className="border-white text-[rgb(0,0,0)] hover:bg-white hover:text-black px-8 py-6 text-lg"
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-8 h-8 text-blue-900" />
                </div>
                <div className="text-2xl mb-1">15+</div>
                <div className="text-sm text-gray-400">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-8 h-8 text-blue-900" />
                </div>
                <div className="text-2xl mb-1">5000+</div>
                <div className="text-sm text-gray-400">
                  Cars Repaired
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-8 h-8 text-blue-900" />
                </div>
                <div className="text-2xl mb-1">98%</div>
                <div className="text-sm text-gray-400">
                  Satisfaction Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}