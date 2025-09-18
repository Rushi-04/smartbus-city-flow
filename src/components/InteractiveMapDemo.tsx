import { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InteractiveMapDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [busPosition, setBusPosition] = useState(0);
  const animationRef = useRef<number>();

  // Indian cities with realistic coordinates
  
// Bus routes between cities (Shegaon → Nagpur with proper spacing)
const routes = [
  {
    name: 'Shegaon - Nagpur Express',
    path: [
      { x: 150, y: 200 }, // Shegaon
      { x: 220, y: 150 }, // Akola
      { x: 300, y: 265 }, // Karanja
      { x: 500, y: 320 }, // Wardha
      { x: 670, y: 270 }, // Butibori
      { x: 800, y: 130 }  // Nagpur
    ],
    color: '#3b82f6',
    active: true
  },
  {
    name: 'Nagpur - Pune Highway',
    path: [
       // Pune
    ],
    color: '',
    active: false
  }
];

// Indian cities with realistic spacing
const cities = [
  { name: 'Shegaon', x: 150, y: 200, label: 'शेगाव' },
  { name: 'Akola', x: 220, y: 150, label: 'अकोला' },
  { name: 'Karanja', x: 300, y: 265, label: 'करंजा' },
  { name: 'Wardha', x: 500, y: 320, label: 'वर्धा' },
  { name: 'Butibori', x: 670, y: 270, label: 'बुटीबोरी' },
  { name: 'Nagpur', x: 800, y: 130, label: 'नागपुर' },
  { name: 'Pune', x: 300, y: 420, label: 'पुणे' },
  { name: 'Bengaluru', x: 500, y: 480, label: 'बेंगलुरु' }
];



  const drawMap = (ctx: CanvasRenderingContext2D, position: number) => {
    const canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background with subtle grid
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw subtle grid lines
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 0.5;
    for (let i = 0; i < canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    // Draw routes
    routes.forEach(route => {
      ctx.strokeStyle = route.color;
      ctx.lineWidth = route.active ? 6 : 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      // Add shadow for active route
      if (route.active) {
        ctx.shadowColor = route.color;
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      }
      
      ctx.beginPath();
      route.path.forEach((point, index) => {
        if (index === 0) {
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
        }
      });
      ctx.stroke();
      
      // Reset shadow
      ctx.shadowBlur = 0;
    });

    // Draw cities
    cities.forEach(city => {
      // City circle
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(city.x, city.y, 12, 0, 2 * Math.PI);
      ctx.fill();
      
      // City border
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // City label background
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      const textWidth = ctx.measureText(city.name).width;
      ctx.fillRect(city.x - textWidth/2 - 8, city.y - 35, textWidth + 16, 20);
      
      // City label
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Poppins';
      ctx.textAlign = 'center';
      ctx.fillText(city.name, city.x, city.y - 20);
    });

    // Animate bus on active route
    const activeRoute = routes.find(r => r.active);
    if (activeRoute) {
      const pathLength = activeRoute.path.length - 1;
      const currentSegment = Math.floor(position * pathLength);
      const segmentProgress = (position * pathLength) % 1;
      
      if (currentSegment < pathLength) {
        const start = activeRoute.path[currentSegment];
        const end = activeRoute.path[currentSegment + 1];
        const busX = start.x + (end.x - start.x) * segmentProgress;
        const busY = start.y + (end.y - start.y) * segmentProgress;

        // Bus shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.beginPath();
        ctx.ellipse(busX + 2, busY + 18, 20, 8, 0, 0, 2 * Math.PI);
        ctx.fill();

        // Bus body
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(busX - 18, busY - 12, 36, 24);
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 2;
        ctx.strokeRect(busX - 18, busY - 12, 36, 24);
        
        // Bus windows
        ctx.fillStyle = '#60a5fa';
        ctx.fillRect(busX - 15, busY - 8, 6, 6);
        ctx.fillRect(busX - 6, busY - 8, 6, 6);
        ctx.fillRect(busX + 3, busY - 8, 6, 6);
        ctx.fillRect(busX + 12, busY - 8, 6, 6);
        
        // Bus wheels
        ctx.fillStyle = '#374151';
        ctx.beginPath();
        ctx.arc(busX - 10, busY + 10, 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(busX + 10, busY + 10, 4, 0, 2 * Math.PI);
        ctx.fill();

        // ETA Popup
        const etaMinutes = Math.floor(Math.random() * 8) + 2;
        const popupText = `Bus #SH-101 • ${etaMinutes} min away`;
        
        // Popup background
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        const popupWidth = 160;
        const popupHeight = 50;
        const popupX = busX - popupWidth/2;
        const popupY = busY - 60;
        
        // Rounded rectangle for popup
        ctx.beginPath();
        ctx.roundRect(popupX, popupY, popupWidth, popupHeight, 8);
        ctx.fill();
        
        // Popup arrow
        ctx.beginPath();
        ctx.moveTo(busX - 6, popupY + popupHeight);
        ctx.lineTo(busX, popupY + popupHeight + 8);
        ctx.lineTo(busX + 6, popupY + popupHeight);
        ctx.closePath();
        ctx.fill();
        
        // Popup text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 11px Poppins';
        ctx.textAlign = 'center';
        ctx.fillText(popupText, busX, popupY + 20);
        
        ctx.font = '10px Poppins';
        ctx.fillStyle = '#10b981';
        ctx.fillText('On Time', busX, popupY + 35);

        // Speed indicator
        const speed = `${Math.floor(Math.random() * 20) + 35} km/h`;
        ctx.fillStyle = 'rgba(16, 185, 129, 0.9)';
        ctx.fillRect(busX + 25, busY - 15, 45, 18);
        ctx.fillStyle = '#ffffff';
        ctx.font = '9px Poppins';
        ctx.textAlign = 'center';
        ctx.fillText(speed, busX + 47, busY - 4);
      }
    }

    // Draw route info panel
    ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
    ctx.fillRect(20, 20, 200, 80);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 1;
    ctx.strokeRect(20, 20, 200, 80);
    
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 14px Poppins';
    ctx.textAlign = 'left';
    ctx.fillText('Active Route', 30, 40);
    
    ctx.font = '12px Poppins';
    ctx.fillText('Shegaon → Nagpur Express', 30, 58);
    
    ctx.fillStyle = '#10b981';
    ctx.fillText('● Live Tracking', 30, 78);
    
    ctx.fillStyle = '#6b7280';
    ctx.fillText('Next: Akola Junction', 30, 90);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      if (isPlaying) {
        setBusPosition(prev => (prev + 0.001) % 1);
      }
      drawMap(ctx, busPosition);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, busPosition]);

  const toggleAnimation = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAnimation = () => {
    setBusPosition(0);
    setIsPlaying(false);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Live Transport Tracking
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See SmartBus in action - real-time tracking across Indian cities with accurate ETAs and live updates
          </p>
        </div>

        <div className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">Interactive Route Map</h3>
                <p className="text-muted-foreground">Real-time bus tracking demonstration</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleAnimation}
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isPlaying ? 'Pause' : 'Play'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetAnimation}
                className="flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <canvas
              ref={canvasRef}
              width={1000}
              height={500}
              className="w-full h-auto border border-border/20 rounded-2xl bg-slate-50 dark:bg-slate-900 shadow-inner"
            />
            
            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-background/95 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg">
              <div className="text-sm font-semibold text-foreground mb-3">Legend</div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-primary rounded"></div>
                  <span className="text-muted-foreground">Active Route</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-2 bg-accent-green rounded"></div>
                  <span className="text-muted-foreground">Alternative Route</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <span className="text-muted-foreground">City Stations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground">Live ETA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Route Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center p-4 bg-primary/5 rounded-xl">
              <div className="text-2xl font-bold text-primary mb-1">186 km</div>
              <div className="text-sm text-muted-foreground">Route Distance</div>
            </div>
            <div className="text-center p-4 bg-accent-green/5 rounded-xl">
              <div className="text-2xl font-bold text-accent-green mb-1">4.2 hrs</div>
              <div className="text-sm text-muted-foreground">Journey Time</div>
            </div>
            <div className="text-center p-4 bg-orange-500/5 rounded-xl">
              <div className="text-2xl font-bold text-orange-600 mb-1">12</div>
              <div className="text-sm text-muted-foreground">Bus Stops</div>
            </div>
            <div className="text-center p-4 bg-purple-500/5 rounded-xl">
              <div className="text-2xl font-bold text-purple-600 mb-1">₹180</div>
              <div className="text-sm text-muted-foreground">Ticket Price</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMapDemo;