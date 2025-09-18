import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Clock, MapPin } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const AdminDashboard = () => {
  const passengerFlowData = [
    { time: '6AM', passengers: 120 },
    { time: '8AM', passengers: 450 },
    { time: '10AM', passengers: 280 },
    { time: '12PM', passengers: 380 },
    { time: '2PM', passengers: 320 },
    { time: '4PM', passengers: 420 },
    { time: '6PM', passengers: 520 },
    { time: '8PM', passengers: 240 },
  ];

  const peakHourData = [
    { route: 'Route A', morning: 340, evening: 420 },
    { route: 'Route B', morning: 280, evening: 350 },
    { route: 'Route C', morning: 220, evening: 290 },
    { route: 'Route D', morning: 180, evening: 240 },
  ];

  const routeOptimizationData = [
    { name: 'Optimized', value: 65, color: '#10b981' },
    { name: 'Needs Review', value: 25, color: '#f59e0b' },
    { name: 'Critical', value: 10, color: '#ef4444' },
  ];

  const stats = [
    { icon: Users, label: 'Daily Passengers', value: '2,456', change: '+12%' },
    { icon: Clock, label: 'Avg Wait Time', value: '4.2 min', change: '-8%' },
    { icon: MapPin, label: 'Active Buses', value: '18', change: '+2' },
    { icon: TrendingUp, label: 'On-Time Rate', value: '94%', change: '+3%' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Administrative Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analytics and insights for transport authorities to optimize routes and improve efficiency
          </p>
        </ScrollAnimation>

        {/* Stats Cards */}
        <ScrollAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-feature hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-accent-green font-medium">{stat.change}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-xl">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </ScrollAnimation>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Passenger Flow Chart */}
          <ScrollAnimation delay={0.2} className="card-feature">
            <h3 className="text-xl font-semibold text-foreground mb-4">Daily Passenger Flow</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={passengerFlowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px' 
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="passengers" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ScrollAnimation>

          {/* Peak Hour Traffic */}
          <ScrollAnimation delay={0.4} className="card-feature">
            <h3 className="text-xl font-semibold text-foreground mb-4">Peak Hour Analysis</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={peakHourData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="route" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px' 
                  }} 
                />
                <Bar dataKey="morning" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="evening" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ScrollAnimation>

          {/* Route Optimization */}
          <ScrollAnimation delay={0.6} className="card-feature">
            <h3 className="text-xl font-semibold text-foreground mb-4">Route Optimization Status</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={routeOptimizationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {routeOptimizationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px' 
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {routeOptimizationData.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  ></div>
                  <span className="text-sm text-muted-foreground">{entry.name}</span>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          {/* Real-time Status */}
          <ScrollAnimation delay={0.8} className="card-feature">
            <h3 className="text-xl font-semibold text-foreground mb-4">Real-time Bus Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-700">
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Bus #101 - Route A</p>
                  <p className="text-sm text-green-600 dark:text-green-300">Running on time</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-700">
                <div>
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">Bus #205 - Route B</p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-300">5 min delay</p>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-700">
                <div>
                  <p className="font-medium text-red-800 dark:text-red-200">Bus #308 - Route C</p>
                  <p className="text-sm text-red-600 dark:text-red-300">Breakdown reported</p>
                </div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;