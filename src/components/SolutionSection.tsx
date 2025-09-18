import { MapPin, Clock, Wifi } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: MapPin,
      title: "Seamless Tracking",
      description: "Real-time bus location tracking with GPS precision on interactive maps",
      features: ["Live GPS tracking", "Route visualization", "Stop-by-stop updates"],
      gradient: "from-primary to-primary-light"
    },
    {
      icon: Clock,
      title: "Smart ETA Prediction",
      description: "AI-powered arrival predictions with delay alerts and dynamic updates",
      features: ["Accurate ETAs", "Delay notifications", "Traffic-aware predictions"],
      gradient: "from-accent-green to-accent-green-light"
    },
    {
      icon: Wifi,
      title: "Low-Bandwidth Optimization",
      description: "Designed for 2G networks - works even in areas with poor connectivity",
      features: ["2G compatible", "Offline capabilities", "Minimal data usage"],
      gradient: "from-primary-dark to-accent-green-dark"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Our Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive, technology-driven approach to make public transport reliable and accessible
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div 
                key={index}
                className="card-elevated group hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${solution.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-primary`}>
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground text-center">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                  {solution.description}
                </p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Solution Overview */}
        <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Complete Ecosystem for Smart Public Transport
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            Our integrated platform connects commuters, transport authorities, and vehicles 
            in a seamless network that makes public transport predictable, efficient, and sustainable.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">🚌</div>
              <div className="font-semibold">For Commuters</div>
              <div className="text-sm text-white/80 mt-2">Real-time tracking & ETAs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">🏛️</div>
              <div className="font-semibold">For Authorities</div>
              <div className="text-sm text-white/80 mt-2">Analytics & optimization</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl mb-4">🚍</div>
              <div className="font-semibold">For Operators</div>
              <div className="text-sm text-white/80 mt-2">Fleet management & insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;