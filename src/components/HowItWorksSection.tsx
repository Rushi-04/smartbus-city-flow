import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Bus Shares GPS Location",
      description: "GPS devices installed in buses continuously share location data via low-bandwidth connection",
      icon: "🚌",
      details: ["Real-time GPS tracking", "2G/3G connectivity", "Battery-efficient devices"]
    },
    {
      number: "02",
      title: "Data Processed in Cloud",
      description: "Our intelligent cloud system processes location data and calculates ETAs using AI algorithms",
      icon: "☁️",
      details: ["AI-powered predictions", "Traffic pattern analysis", "Route optimization"]
    },
    {
      number: "03",
      title: "ETA Shown on Apps & Web App",
      description: "Commuters receive real-time updates on mobile apps and digital display boards at bus stops",
      icon: "📱",
      details: ["Multi-platform access", "Push notifications", "Digital signage integration"]
    },
    {
      number: "04",
      title: "Authorities View Analytics",
      description: "Transport authorities access comprehensive dashboards with insights for route optimization",
      icon: "📊",
      details: ["Performance metrics", "Passenger flow analysis", "Operational insights"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000); // smoother, slower cycle
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A simple 4-step process that transforms public transport experience
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop only) */}
          <div className="absolute top-[4.5rem] left-0 right-0 h-1 bg-gradient-primary hidden lg:block">
            <div
              className="h-full bg-accent-green transition-all duration-700 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                aria-label={`Step ${index + 1}: ${step.title}`}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  index === activeStep
                    ? "scale-105 shadow-xl"
                    : "scale-95 opacity-80"
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Number */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all duration-500 ${
                    index <= activeStep
                      ? "bg-gradient-primary shadow-primary"
                      : "bg-muted-foreground"
                  }`}
                >
                  {step.number}
                </div>

                {/* Step Card */}
                <div className="card-elevated text-center min-h-[320px] p-6 flex flex-col hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {step.description}
                  </p>

                  {/* Step Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-center justify-center"
                      >
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                        <span className="text-xs text-muted-foreground">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow (only desktop, skip last step) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[4.5rem] -right-6 z-10">
                    <ArrowRight
                      className={`h-6 w-6 transition-colors duration-500 ${
                        index < activeStep
                          ? "text-accent-green"
                          : "text-muted-foreground"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
