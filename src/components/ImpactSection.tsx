import { Clock, TrendingUp, Car } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import AnimatedCounter from './AnimatedCounter';

const ImpactSection = () => {
  const impacts = [
    {
      icon: Clock,
      value: 40,
      suffix: '%',
      title: 'Less Waiting Time',
      description: 'Reduced average wait times through predictable scheduling',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: TrendingUp,
      value: 25,
      suffix: '%',
      title: 'More Public Transport Usage',
      description: 'Increased ridership due to improved reliability',
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: Car,
      value: 30,
      suffix: '%',
      title: 'Reduced Private Vehicle Dependence',
      description: 'Decreased reliance on personal vehicles for daily commute',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent-green/5">
      <div className="container mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Transforming Urban Mobility
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world impact of TravelEase implementation in small cities across India
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <ScrollAnimation
              key={index}
              delay={index * 0.2}
              className="text-center"
            >
              <div className="card-feature group hover:scale-105 transition-all duration-500">
                <div className={`w-16 h-16 ${impact.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <impact.icon className={`h-8 w-8 ${impact.color}`} />
                </div>
                
                <div className="text-5xl md:text-6xl font-bold text-foreground mb-2">
                  <AnimatedCounter 
                    end={impact.value} 
                    suffix={impact.suffix}
                    className="text-gradient-primary"
                  />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {impact.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Before vs After Comparison */}
        <ScrollAnimation delay={0.8} className="mt-20">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Before vs After TravelEase
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Before */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  Without TravelEase
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-red-500">❌</span>
                    <span>Unpredictable bus arrival times</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-red-500">❌</span>
                    <span>Long waiting periods at stops</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-red-500">❌</span>
                    <span>Overcrowded buses during peak hours</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-red-500">❌</span>
                    <span>High dependency on private vehicles</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-red-500">❌</span>
                    <span>Increased pollution and traffic</span>
                  </div>
                </div>
              </div>

              {/* After */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  With TravelEase
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-green-500">✅</span>
                    <span>Real-time bus tracking and ETAs</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-green-500">✅</span>
                    <span>Minimal waiting times</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-green-500">✅</span>
                    <span>Better passenger distribution</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-green-500">✅</span>
                    <span>Increased public transport adoption</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <span className="text-green-500">✅</span>
                    <span>Reduced carbon footprint</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ImpactSection;