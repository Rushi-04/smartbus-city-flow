import { 
  MapPin, 
  Clock, 
  Globe, 
  Smartphone, 
  Monitor, 
  BarChart3, 
  AlertTriangle, 
  Languages 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-time Bus Tracking",
      description: "Live GPS tracking with map visualization and route display",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "ETA Prediction",
      description: "AI-powered arrival time predictions with delay alerts",
      color: "text-accent-green"
    },
    {
      icon: Languages,
      title: "Multi-language Support",
      description: "Available in local languages for better accessibility",
      color: "text-primary-dark"
    },
    {
      icon: Smartphone,
      title: "Lightweight Mobile App",
      description: "Optimized for low-end devices and slow internet connections",
      color: "text-accent-green-dark"
    },
    {
      icon: Monitor,
      title: "Digital Display Boards",
      description: "Bus stop displays for users without smartphones",
      color: "text-primary"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights for transport authorities",
      color: "text-accent-green"
    },
    {
      icon: AlertTriangle,
      title: "Incident Reporting",
      description: "Real-time alerts for accidents, breakdowns, and delays",
      color: "text-destructive"
    },
    {
      icon: Globe,
      title: "Scalable Platform",
      description: "Expandable to autos, e-rickshaws, and other transport modes",
      color: "text-primary-light"
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Key Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive features designed specifically for small city public transport challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="card-elevated group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-card to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <IconComponent className={`h-8 w-8 ${feature.color}`} />
                </div>
                
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-border/50">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out group-hover:w-full"
                      style={{ width: `${Math.min(85 + index * 2, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">
                    Ready for Implementation
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary/10 to-accent-green/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
              🌐 Multi-Platform Access
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Progressive Web App (PWA)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span className="text-muted-foreground">Native Mobile Apps</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-dark rounded-full"></div>
                <span className="text-muted-foreground">Digital Kiosks at Bus Stops</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-green-dark rounded-full"></div>
                <span className="text-muted-foreground">SMS-based Alerts</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-green/10 to-primary/10 rounded-3xl p-8 border border-accent-green/20">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">
              🚀 Innovation Highlights
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                <span className="text-muted-foreground">Works on 2G Networks</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Offline Capability</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent-green-dark rounded-full"></div>
                <span className="text-muted-foreground">Regional Language Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-dark rounded-full"></div>
                <span className="text-muted-foreground">Predictive Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;