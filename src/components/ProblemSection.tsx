import { Clock, Car, TrendingUp, Users } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Unpredictable Schedules",
      description: "Commuters waste hours waiting for buses with no idea when they'll arrive",
      stat: "2-3 hours daily"
    },
    {
      icon: TrendingUp,
      title: "Traffic Congestion",
      description: "Inefficient public transport leads to more private vehicles on roads",
      stat: "45% increase"
    },
    {
      icon: Car,
      title: "Environmental Impact",
      description: "Higher pollution levels due to increased private vehicle dependency",
      stat: "60% more emissions"
    },
    {
      icon: Users,
      title: "Overcrowding Issues",
      description: "No visibility into bus capacity leads to uncomfortable journeys",
      stat: "80% over capacity"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            The Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Small cities face unique challenges in public transportation that traditional solutions don't address
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="card-elevated text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-destructive/20 to-destructive/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-destructive" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {problem.description}
                </p>
                
                <div className="text-2xl font-bold text-destructive">
                  {problem.stat}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-destructive/10 rounded-2xl p-6 border border-destructive/20">
            <div className="text-4xl">⚠️</div>
            <div className="text-left">
              <div className="text-lg font-semibold text-destructive">Current State of Public Transport</div>
              <div className="text-muted-foreground">Unreliable • Unpredictable • Inefficient</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;