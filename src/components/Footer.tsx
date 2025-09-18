import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Demo', href: '#demo' },
        { name: 'How It Works', href: '#how-it-works' },
        { name: 'Pricing', href: '#pricing' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#careers' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Help Center', href: '#help' },
        { name: 'Community', href: '#community' },
        { name: 'Status', href: '#status' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-background to-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🚍</span>
              </div>
              <span className="text-2xl font-bold text-gradient-primary">SmartBus</span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Revolutionizing public transport in small cities with real-time tracking, 
              smart predictions, and sustainable mobility solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-10 h-10 p-0 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
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
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-muted-foreground">
                Get the latest updates on SmartBus features and smart city innovations.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="btn-hero whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground mb-2">
                © {currentYear} SmartBus. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Built for <span className="font-semibold text-primary">Smart India Hackathon 2025</span>
              </p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;