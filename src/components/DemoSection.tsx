import { Smartphone, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollAnimation from './ScrollAnimation';
import MapDemo from './MapDemo';

const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Interactive Prototype
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience SmartBus in action with our live demo showcasing real-time tracking and predictive features
          </p>
        </ScrollAnimation>

        {/* Map Demo */}
        <ScrollAnimation className="mb-16">
          <MapDemo />
        </ScrollAnimation>

        {/* Demo Buttons */}
        <ScrollAnimation delay={0.4} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card-feature text-center group hover:scale-105 transition-all duration-500">
            <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Smartphone className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Commuter App</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Track your bus in real-time, get accurate ETAs, and plan your journey with confidence
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Real-time GPS tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Smart ETA predictions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Delay notifications</span>
              </div>
            </div>
            <Button className="btn-hero w-full">
              Track My Bus
            </Button>
          </div>

          <div className="card-feature text-center group hover:scale-105 transition-all duration-500">
            <div className="bg-accent-green/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Monitor className="h-10 w-10 text-accent-green" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Admin Dashboard</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Comprehensive fleet management with analytics, route optimization, and operational insights
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Fleet monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>Performance analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span>Route optimization</span>
              </div>
            </div>
            <Button variant="outline" className="w-full hover:bg-accent-green hover:text-white transition-colors duration-300">
              See Dashboard
            </Button>
          </div>
        </ScrollAnimation>

        {/* Features Preview */}
        <ScrollAnimation delay={0.6} className="mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Multi-Platform Experience
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Mobile App</h4>
                <p className="text-sm text-muted-foreground">
                  Native experience for Android and iOS users
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-green-50 dark:bg-green-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Web Portal</h4>
                <p className="text-sm text-muted-foreground">
                  Access from any browser, no installation required
                </p>
              </div>
              
              <div className="text-center p-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📺</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Digital Displays</h4>
                <p className="text-sm text-muted-foreground">
                  Real-time updates at bus stops and stations
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default DemoSection;