import { Button } from "@/components/ui/button";
import { Smartphone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex mt-7 items-center justify-center overflow-hidden ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart city with public transport"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent-green/90"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            🚍
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            📡
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            📱
          </div>
        </div>

        {/* Moving Bus Animation */}
        <div className="absolute bottom-32 left-0">
          <div className="animate-move-bus text-4xl">🚌</div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-gradient">TravelEase</span>
            <span className="block text-4xl md:text-4xl font-bold text-white/95 mt-4">
              Real-Time Public Transport Tracking
            </span>
            <span className="block text-2xl md:text-3xl font-semibold text-accent-green-light mt-4">
              for Small Cities
            </span>
          </h1>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xl md:text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Reliable, Low-Bandwidth, Real-time Transport Tracking—no more waiting or guessing,
            just smarter, stress-free journeys.
          </p>
        </div>

        <div className="animate-fade-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="h-14 px-8 text-xl">
            <Smartphone className="mr-3 h-6 w-6" />
            Track My Bus
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 text-xl bg-white/10 text-white border-white hover:bg-white/20">
            See Dashboard
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>

        {/* Key Stats */}
        <div className="animate-fade-up mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-green-light mb-2">40%</div>
            <div className="text-white/80">Less Waiting Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-green-light mb-2">25%</div>
            <div className="text-white/80">More Public Transport Usage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent-green-light mb-2">30%</div>
            <div className="text-white/80">Reduced Private Vehicle Dependence</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;