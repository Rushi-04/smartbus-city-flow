import { CheckCircle, AlertTriangle, XCircle, Wrench, MapPin } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const VehicleStatus = () => {
  const vehicleStatuses = [
    {
      id: 'BUS-101',
      route: 'Route A - Main Street',
      status: 'running',
      icon: CheckCircle,
      message: 'Running Smoothly',
      details: 'On schedule, 24 passengers onboard',
      location: 'Near City Mall',
      eta: '3 min',
      cardClass: 'card-status-green'
    },
    {
      id: 'BUS-205',
      route: 'Route B - Industrial Area',
      status: 'incident',
      icon: AlertTriangle,
      message: 'Minor Incident Reported',
      details: 'Traffic congestion, slight delay expected',
      location: 'Highway Junction',
      eta: '8 min',
      cardClass: 'card-status-yellow'
    },
    {
      id: 'BUS-308',
      route: 'Route C - University Campus',
      status: 'breakdown',
      icon: XCircle,
      message: 'Engine Failure',
      details: 'Maintenance team dispatched, replacement bus sent',
      location: 'Campus Gate 2',
      eta: 'Stopped',
      cardClass: 'card-status-red'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'running':
        return CheckCircle;
      case 'incident':
        return AlertTriangle;
      case 'breakdown':
        return XCircle;
      default:
        return CheckCircle;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Real-Time Vehicle Status
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor fleet health, track incidents, and ensure passenger safety with instant status updates
          </p>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicleStatuses.map((vehicle, index) => {
            const StatusIcon = vehicle.icon;
            return (
              <ScrollAnimation
                key={vehicle.id}
                delay={index * 0.2}
                className={`rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border ${vehicle.cardClass}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      vehicle.status === 'running' ? 'bg-green-100 dark:bg-green-900/30' :
                      vehicle.status === 'incident' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                      'bg-red-100 dark:bg-red-900/30'
                    }`}>
                      <StatusIcon className={`h-5 w-5 ${
                        vehicle.status === 'running' ? 'text-green-600' :
                        vehicle.status === 'incident' ? 'text-yellow-600' :
                        'text-red-600'
                      }`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{vehicle.id}</h3>
                      <p className="text-sm opacity-80">{vehicle.route}</p>
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    vehicle.status === 'running' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                    vehicle.status === 'incident' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200' :
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200'
                  }`}>
                    {vehicle.status === 'running' ? 'Active' :
                     vehicle.status === 'incident' ? 'Delayed' : 'Stopped'}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-base">{vehicle.message}</h4>
                  <p className="text-sm opacity-80">{vehicle.details}</p>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 opacity-60" />
                    <span className="opacity-80">{vehicle.location}</span>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-current/20">
                    <span className="text-sm font-medium">Next Stop ETA:</span>
                    <span className={`font-bold ${
                      vehicle.status === 'breakdown' ? 'text-red-600' : ''
                    }`}>
                      {vehicle.eta}
                    </span>
                  </div>
                  
                  {vehicle.status === 'breakdown' && (
                    <div className="flex items-center gap-2 text-sm pt-2 border-t border-current/20">
                      <Wrench className="h-4 w-4" />
                      <span>Maintenance team en route</span>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            );
          })}
        </div>

        {/* Quick Actions */}
        <ScrollAnimation delay={0.8} className="mt-12 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Fleet Management Tools</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="p-4 bg-primary/10 hover:bg-primary/20 rounded-xl transition-colors duration-300 text-primary font-medium">
                Send Emergency Alert
              </button>
              <button className="p-4 bg-accent-green/10 hover:bg-accent-green/20 rounded-xl transition-colors duration-300 text-accent-green font-medium">
                Deploy Backup Bus
              </button>
              <button className="p-4 bg-orange-500/10 hover:bg-orange-500/20 rounded-xl transition-colors duration-300 text-orange-600 font-medium">
                Contact Maintenance
              </button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default VehicleStatus;