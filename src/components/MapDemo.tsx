import { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [busPosition, setBusPosition] = useState(0);
  const animationRef = useRef<number>();

  // Bus route coordinates (simplified path)
  const route = [
    { x: 50, y: 200 },
    { x: 150, y: 180 },
    { x: 250, y: 160 },
    { x: 350, y: 140 },
    { x: 450, y: 120 },
    { x: 550, y: 100 },
    { x: 650, y: 120 },
    { x: 750, y: 140 },
  ];

  const drawMap = (ctx: CanvasRenderingContext2D, position: number) => {
    const canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw background
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw route path
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    route.forEach((point, index) => {
      if (index === 0) {
        ctx.moveTo(point.x, point.y);
      } else {
        ctx.lineTo(point.x, point.y);
      }
    });
    ctx.stroke();

    // Draw bus stops
    route.forEach((point, index) => {
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(point.x, point.y, 8, 0, 2 * Math.PI);
      ctx.fill();
      
      // Stop labels
      ctx.fillStyle = '#374151';
      ctx.font = '12px Poppins';
      ctx.fillText(`Stop ${index + 1}`, point.x - 15, point.y - 15);
    });

    // Calculate bus position
    const totalStops = route.length - 1;
    const currentSegment = Math.floor(position * totalStops);
    const segmentProgress = (position * totalStops) % 1;
    
    if (currentSegment < totalStops) {
      const start = route[currentSegment];
      const end = route[currentSegment + 1];
      const busX = start.x + (end.x - start.x) * segmentProgress;
      const busY = start.y + (end.y - start.y) * segmentProgress;

      // Draw bus
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.roundRect(busX - 15, busY - 10, 30, 20, 5);
      ctx.fill();
      
      // Bus emoji
      ctx.font = '20px Arial';
      ctx.fillText('🚌', busX - 10, busY + 5);

      // Bus info bubble
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.roundRect(busX - 30, busY - 40, 60, 25, 5);
      ctx.fill();
      
      ctx.fillStyle = '#ffffff';
      ctx.font = '10px Poppins';
      ctx.fillText('Bus #101', busX - 20, busY - 28);
      ctx.fillText('2 min away', busX - 25, busY - 18);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      if (isPlaying) {
        setBusPosition(prev => (prev + 0.005) % 1);
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
    <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-foreground">Live Bus Tracking Demo</h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleAnimation}
            className="flex items-center gap-2"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? 'Pause' : 'Play'}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={resetAnimation}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>
      
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={800}
          height={300}
          className="w-full h-auto border border-border/20 rounded-lg bg-slate-50 dark:bg-slate-900"
        />
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          Route: Main Street → City Center
        </div>
      </div>
    </div>
  );
};

export default MapDemo;