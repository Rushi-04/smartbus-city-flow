import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Support', href: '#support' },
  ];

  return (
    <footer className="bg-gradient-to-br from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          
          {/* Brand Section (Left) */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🚍</span>
              </div>
              <span className="text-2xl font-bold text-gradient-primary">TravelEase</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Revolutionizing public transport in small cities with real-time tracking 
              and smart mobility solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links (Right) */}
          <div className="text-right">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
          <p>© {currentYear} TravelEase. All rights reserved.</p>
          <p>
            Built for <span className="font-semibold text-primary">Smart India Hackathon 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
